import { ethers } from 'ethers';
//import {getSigner} from './GetSignerFromEnv'
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

    getWinnerName(ballotContract);
}

function extractInputData(argv: string[]): string[] {
    const dataValues: string[] = argv.slice(2);

    validateInputDataValues(dataValues);
    
    return dataValues;
}

function validateInputDataValues(dataValues: string[]) {
    if(dataValues.length < 1) {
        throw new Error("Missing contract address");
    }
}

function attachToBalot(signer: ethers.Wallet, deployedContract: string) {
    const ballotFactory = new Ballot__factory(signer);
    
    console.log(`Attaching ballot to address ${deployedContract}`);
    return ballotFactory.attach(deployedContract);
}

async function getWinnerName(ballotContract: Ballot) {
    console.log(`Getting winner proposal name`);
    const winnerProposalName = await ballotContract.winnerName();
    console.log(`Winner proposal is ${winnerProposalName}`);
    const winnerProposalNameDecoded = ethers.utils.parseBytes32String(winnerProposalName)
    console.log(`Winner proposal decoded ${winnerProposalNameDecoded}`);

    console.log(`Getting winner proposal details`);
    const winningProposal = await ballotContract.winningProposal();
    console.log(`Winning proposal index: ${winningProposal}`);    
}
