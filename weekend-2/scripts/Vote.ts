import { ethers } from 'ethers';
//import {getSigner} from './GetSignerFromEnv'
import {getSigner} from './GetAccount2SignerFromEnv'
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

    delegateVote(ballotContract, inputData[1]);
}

function extractInputData(argv: string[]): string[] {
    const dataValues: string[] = argv.slice(2);

    validateInputDataValues(dataValues);
    
    return dataValues;
}

function validateInputDataValues(dataValues: string[]) {
    if(dataValues.length < 2) {
        throw new Error("Missing contract address and/or proposal index");
    }
}

function attachToBalot(signer: ethers.Wallet, deployedContract: string) {
    const ballotFactory = new Ballot__factory(signer);
    
    console.log(`Attaching ballot to address ${deployedContract}`);
    return ballotFactory.attach(deployedContract);
}

async function delegateVote(ballotContract: Ballot, proposal: string) {
    console.log(`Voting in proposal ${proposal}`);
    const delegateTransaction = await ballotContract.vote(proposal);

    console.log("Awaiting confirmation");
    const confirmation = await delegateTransaction.wait();
    console.log(`Voted in proposal ${proposal} in transaction ${confirmation.transactionHash}`);
}
