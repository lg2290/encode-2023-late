import { ethers } from "ethers";
import * as dotenv from 'dotenv';
import { getDeployerSigner } from './helper/SignerHelper';
import { TokenizedBallot__factory } from "../typechain-types";
import { convertStringArrayToBytes32Array } from './helper/StringHelper';
import { extractInputData } from './helper/InputDataHelper';

dotenv.config();

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

async function main() {
    const deployer = await getDeployerSigner();

    const inputData = extractInputData(process.argv, 3);
    const myTokenContractAddress = inputData[0];
    const blockNumber = +inputData[1];
    const proposals = extractProposals(inputData);

    deployTokenizedBallot(deployer, proposals, myTokenContractAddress, blockNumber);
}

function extractProposals(args: string[]) {
    const proposals = args.slice(2);
    validateProposals(proposals);

    console.log("Proposals: ");
    proposals.forEach((element, index) => {
        console.log(`Proposal N. ${index + 1}: ${element}`);
    });

    return convertStringArrayToBytes32Array(proposals);
}

function validateProposals(proposals: string[]) {
    if (proposals.length <= 0) {
        throw new Error("Missing Argument Proposals");
    }
}

async function deployTokenizedBallot(deployer: ethers.Wallet, proposals: string[], myTokenContractAddress: string,  blockNumber: number) {
    const tokenizedBallotFactory = new TokenizedBallot__factory(deployer);
    console.log(`Deploying Tokenized Ballot contract, aiming vote power state in block ${blockNumber}`);
    const tokenizedBallotContract = await tokenizedBallotFactory.deploy(proposals, myTokenContractAddress, blockNumber);

    console.log("Awaiting confirmation");
    const txConf = await tokenizedBallotContract.deployTransaction.wait();
    console.log(`Contract deployed, address ${tokenizedBallotContract.address}, block number ${txConf.blockNumber}`);    
}