import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { convertStringArrayToBytes32Array } from '../scripts/helper/StringHelper'
import { TokenizedBallot } from "../typechain-types/contracts/TokenizedBallot.sol";
import { TokenizedBallot__factory } from "../typechain-types/factories/contracts/TokenizedBallot.sol";
import { MyToken, MyToken__factory } from "../typechain-types";
import { expect } from "chai";

const PROPOSALS = ["Proposal1", "Proposal2", "Proposal3"];
const DEPLOYER_MINT_VALUE = 300;
const ACCOUNT1_MINT_VALUE = 100;
const ACCOUNT2_MINT_VALUE = 80;

describe("Tokenized Ballot contract", () => {
    let deployer: SignerWithAddress;
    let account1: SignerWithAddress;
    let account2: SignerWithAddress;

    let myTokenContract: MyToken;
    let myTokenContractDeploymentBlock: number;

    let tokenizedBallotContract: TokenizedBallot;

    beforeEach(async () => {
        [deployer, account1, account2] = await ethers.getSigners();

        const myTokenFactory = new MyToken__factory(deployer);
        myTokenContract = await myTokenFactory.deploy();
        const myTokenContractDeployReceipt = await myTokenContract.deployTransaction.wait();
        myTokenContractDeploymentBlock = myTokenContractDeployReceipt.blockNumber;
        log(`Deployed MyToken, tx ${myTokenContractDeployReceipt.transactionHash}, block ${myTokenContractDeployReceipt.blockNumber}`);
    });

    describe('Deployment', () => {
        beforeEach(async () => {    
            const tokenizedBallotFactory = new TokenizedBallot__factory(deployer);
            tokenizedBallotContract = await tokenizedBallotFactory.deploy(convertStringArrayToBytes32Array(PROPOSALS), myTokenContract.address, myTokenContractDeploymentBlock);
            const tokenizedBallotContractDeployReceipt = await tokenizedBallotContract.deployTransaction.wait();
            const tokenizedBallotContractDeploymentBlock = tokenizedBallotContractDeployReceipt.blockNumber;
            log(`Deployed Tokenized Ballot, tx ${tokenizedBallotContractDeployReceipt.transactionHash}, block ${tokenizedBallotContractDeployReceipt.blockNumber}`);
        });
    
        it('should deploy contract with the proposals', async () => {
            for(let index in PROPOSALS) {
                let proposal = await tokenizedBallotContract.proposals(index);
                expect(proposal[0]).to.eq(ethers.utils.formatBytes32String(PROPOSALS[index]));
            }
        });

        it('should revert when getting winning proposal before any vote done', async () => {
            await expect(tokenizedBallotContract.winningProposal()).to.revertedWith("Zero votes for all proposals");
        });
    });

    describe('MyToken minted', () => {
        let deployerMintBlock: number;
        let deployerDelegateTxBlock: number;
        let account1MintBlock: number;
        let account2MintBlock: number;
        let account2DelegateTxBlock: number;

        beforeEach(async () => {
            const deployerMintTx = await myTokenContract.mint(deployer.address, DEPLOYER_MINT_VALUE);
            const deployerMintTxReceipt = await deployerMintTx.wait();
            deployerMintBlock = deployerMintTxReceipt.blockNumber;
            log(`Minted ${DEPLOYER_MINT_VALUE} to deployer in block ${deployerMintBlock}`);

            const deployerDelegateTx = await myTokenContract.delegate(deployer.address);
            const deployerDelegateTxReceipt = await deployerDelegateTx.wait();
            deployerDelegateTxBlock = deployerDelegateTxReceipt.blockNumber;
            log(`Self delegated deployer votes in block ${deployerDelegateTxBlock}`);
    
            const account1MintTx = await myTokenContract.mint(account1.address, ACCOUNT1_MINT_VALUE);
            const account1MintTxReceipt = await account1MintTx.wait();
            account1MintBlock = account1MintTxReceipt.blockNumber;
            log(`Minted ${ACCOUNT1_MINT_VALUE} to account1 in block ${account1MintBlock}`);

            const account1DelegateTx = await myTokenContract.connect(account1).delegate(account2.address);
            const account1DelegateTxReceipt = await account1DelegateTx.wait();
            log(`Delegated account1 votes to account2 in block ${account1DelegateTxReceipt.blockNumber}`);
            
            const account2MintTx = await myTokenContract.mint(account2.address, ACCOUNT2_MINT_VALUE);
            const account2MintTxReceipt = await account2MintTx.wait();
            account2MintBlock = account2MintTxReceipt.blockNumber;
            log(`Minted ${ACCOUNT2_MINT_VALUE} to account2 in block ${account2MintBlock}`);

            const account2DelegateTx = await myTokenContract.connect(account2).delegate(account1.address);
            const account2DelegateTxReceipt = await account2DelegateTx.wait();
            log(`Delegated account2 votes to account1 in block ${account2DelegateTxReceipt.blockNumber}`);
            account2DelegateTxBlock = account2DelegateTxReceipt.blockNumber;
        });
    
        describe('Voting Power', () => {    
            beforeEach(async () => {
                const tokenizedBallotFactory = new TokenizedBallot__factory(deployer);
                tokenizedBallotContract = await tokenizedBallotFactory.deploy(convertStringArrayToBytes32Array(PROPOSALS), myTokenContract.address, account1MintBlock);
                const tokenizedBallotContractDeployReceipt = await tokenizedBallotContract.deployTransaction.wait();
                log(`Deployed Tokenized Ballot, tx ${tokenizedBallotContractDeployReceipt.transactionHash}, block ${tokenizedBallotContractDeployReceipt.blockNumber}`);
            });
    
            it('Should return voting power for accounts', async () => {
                const deployerVotePower = await tokenizedBallotContract.votePower(deployer.address)
                expect(deployerVotePower).to.eq(DEPLOYER_MINT_VALUE);
    
                const account1VotePower = await tokenizedBallotContract.votePower(account1.address)
                expect(account1VotePower).to.eq(0);

                const account2VotePower = await tokenizedBallotContract.votePower(account2.address)
                expect(account2VotePower).to.eq(0);
            });
    
            it('Should update voting power after vote', async () => {
                const voteAmount = 12;
                const voteTx = await tokenizedBallotContract.vote(0, voteAmount);
                voteTx.wait();
    
                let votesSpent = voteAmount;
                const deployerVotingPowerSpent = await tokenizedBallotContract.votingPowerSpent(deployer.address);
                expect(deployerVotingPowerSpent).to.eq(votesSpent);
    
                let votePower = DEPLOYER_MINT_VALUE - voteAmount;
                const deployerVotePower = await tokenizedBallotContract.votePower(deployer.address)
                expect(deployerVotePower).to.eq(votePower);
    
                const voteAmount2 = 7;
                const vote2Tx = await tokenizedBallotContract.vote(0, voteAmount2);
                vote2Tx.wait();
    
                votesSpent += voteAmount2;
                const deployerVotingPowerSpent2 = await tokenizedBallotContract.votingPowerSpent(deployer.address);
                expect(deployerVotingPowerSpent2).to.eq(votesSpent);
    
                votePower -= voteAmount2;
                const deployerVotePower2 = await tokenizedBallotContract.votePower(deployer.address)
                expect(deployerVotePower2).to.eq(votePower);
            });
        });
    
        describe('Casting Votes', () => {
            beforeEach(async () => {    
                const tokenizedBallotFactory = new TokenizedBallot__factory(deployer);
                tokenizedBallotContract = await tokenizedBallotFactory.deploy(convertStringArrayToBytes32Array(PROPOSALS), myTokenContract.address, account2DelegateTxBlock);
                const tokenizedBallotContractDeployReceipt = await tokenizedBallotContract.deployTransaction.wait();
                log(`Deployed Tokenized Ballot, tx ${tokenizedBallotContractDeployReceipt.transactionHash}, block ${account2DelegateTxBlock}`);
            });
            
            it('Should reflect votes accordingly', async () => {
                const deployerVoteAmount = 15;
                const deployerVoteProposal = 0;
                const deployerVoteTx = await tokenizedBallotContract.vote(deployerVoteProposal, deployerVoteAmount);
                const deployerVoteTxReceipt = await deployerVoteTx.wait();

                const account1VoteAmount = 10;
                const account1VoteProposal = 1;
                const account1VoteTx = await tokenizedBallotContract.connect(account1).vote(account1VoteProposal, account1VoteAmount);
                const account1VoteTxReceipt = await account1VoteTx.wait();

                const account2VoteAmount = 6;
                const account2VoteTx = await tokenizedBallotContract.connect(account2).vote(account1VoteProposal, account2VoteAmount);
                const account2VoteTxReceipt = await account2VoteTx.wait();

                const proposal0 = await tokenizedBallotContract.proposals(0);
                expect(proposal0[1]).to.eq(deployerVoteAmount);

                const proposal1 = await tokenizedBallotContract.proposals(1);
                expect(proposal1[1]).to.eq(account1VoteAmount + account2VoteAmount);

                const proposal2 = await tokenizedBallotContract.proposals(2);
                expect(proposal2[1]).to.eq(0);

            });

            it('Should revert if amount bigger than voting power', async () => {
                const deployerVoteAmount = DEPLOYER_MINT_VALUE + 1;
                const deployerVoteProposal = 0;
                await expect(tokenizedBallotContract.vote(deployerVoteProposal, deployerVoteAmount))
                    .to.be.revertedWith('Voting power smaller than amount');
            });
        });

        describe('Winning Proposal', () => {
            beforeEach(async () => {
                const tokenizedBallotFactory = new TokenizedBallot__factory(deployer);
                tokenizedBallotContract = await tokenizedBallotFactory.deploy(convertStringArrayToBytes32Array(PROPOSALS), myTokenContract.address, account2DelegateTxBlock);
                const tokenizedBallotContractDeployReceipt = await tokenizedBallotContract.deployTransaction.wait();
                log(`Deployed Tokenized Ballot, tx ${tokenizedBallotContractDeployReceipt.transactionHash}, block ${account2DelegateTxBlock}`);
            });
            
            it('Should reject if result is tied', async () => {
                const voteAmount = 15;

                const deployerVoteProposal = 0;
                const deployerVoteTx = await tokenizedBallotContract.vote(deployerVoteProposal, voteAmount);
                await deployerVoteTx.wait();

                const account1VoteProposal = 1;
                const account1VoteTx = await tokenizedBallotContract.connect(account1).vote(account1VoteProposal, voteAmount);
                await account1VoteTx.wait();

                await expect(tokenizedBallotContract.winningProposal())
                    .to.be.revertedWith("There are proposals tied with most votes");
            });

            it('Should revert if amount bigger than voting power', async () => {
                const voteAmount = 15;

                const deployerVoteProposal = 0;
                const deployerVoteTx = await tokenizedBallotContract.vote(deployerVoteProposal, voteAmount);
                await deployerVoteTx.wait();

                const account1VoteProposal = 1;
                const account1VoteTx = await tokenizedBallotContract.connect(account1).vote(account1VoteProposal, voteAmount + 1);
                await account1VoteTx.wait();

                const winningProposal = await tokenizedBallotContract.winningProposal();
                expect(winningProposal).to.eq(account1VoteProposal);
            });
        });
    });



});

const LOGS_ENABLED = false;

function log(logMessage: string) {
    if(LOGS_ENABLED) {
        console.log(logMessage);
    }
}