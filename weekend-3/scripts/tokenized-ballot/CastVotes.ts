import { getDeployerSigner, getAccount1Signer } from '../helper/SignerHelper'
import { attachToTokenizedBalot } from '../helper/ContractHelper'
import { extractInputData } from '../helper/InputDataHelper';
import { ethers } from 'ethers';

main().catch(handleGlobalError);

function handleGlobalError(error: any) {
    console.error(error);
    process.exitCode = 1;
}

async function main() {
    const inputData: string[] = extractInputData(process.argv, 1);
    const tokenBallotContractAddress = inputData[0];

    const deployer = await getDeployerSigner();
    const account1 = await getAccount1Signer();

    castVotes(deployer, tokenBallotContractAddress);
    castVotes(account1, tokenBallotContractAddress);
}

async function castVotes(signer: ethers.Wallet, tokenBallotContractAddress: string) {
    const tokenizedBallotContract = attachToTokenizedBalot(signer, tokenBallotContractAddress);

    const proposal = getRandomInt(3);
    const voteAmount = getRandomInt(30);

    console.log(`Voting`);
    const voteTx = await tokenizedBallotContract.vote(proposal, voteAmount);
    const voteTxReceipt = await voteTx.wait();
    console.log(`Address ${signer.address} voted ${voteAmount} for proposal ${proposal}, tx ${voteTxReceipt.transactionHash}, block number ${voteTxReceipt.blockNumber}`);
}

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}
  