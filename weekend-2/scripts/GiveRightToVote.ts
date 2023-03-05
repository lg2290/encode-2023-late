import { ethers } from 'ethers';
import {getSigner} from './GetSignerFromEnv'
import { Ballot, Ballot__factory } from "../typechain-types";


main().catch(handleGlobalError);

function handleGlobalError(error: any) {
    console.error(error);
    process.exitCode = 1;
}

async function main() {
    const inputData: string[] = extractInputData(process.argv);

    const signer = await getSigner();

    const ballotContract = attachToBalot(signer, inputData[0]);

    giveRightToVote(ballotContract, inputData[1]);
}

function extractInputData(argv: string[]): string[] {
    const dataValues: string[] = argv.slice(2);

    validateInputDataValues(dataValues);
    
    return dataValues;
}

function validateInputDataValues(dataValues: string[]) {
    if(dataValues.length < 2) {
        throw new Error("Missing contract address and/or contract to give right to vote");
    }
}

function attachToBalot(signer: ethers.Wallet, deployedContract: string) {
    const ballotFactory = new Ballot__factory(signer);
    
    console.log(`Attaching ballot to address ${deployedContract}`);
    return ballotFactory.attach(deployedContract);
}

async function giveRightToVote(ballotContract: Ballot, contractToGiveRightToVote: string) {
    console.log(`Giving right to vote to ${contractToGiveRightToVote}`);
    const rightToVoteTransaction = await ballotContract.giveRightToVote(contractToGiveRightToVote);

    console.log("Awaiting confirmation");
    const confirmation = await rightToVoteTransaction.wait();
    console.log(`Given right to vote to ${contractToGiveRightToVote} in transaction ${confirmation.transactionHash}`);
}
