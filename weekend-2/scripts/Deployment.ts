import { ethers } from "ethers";
import * as dotenv from 'dotenv';
import { Ballot__factory } from "../typechain-types";
import {getSigner} from "./GetSignerFromEnv";

dotenv.config();

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

async function main() {
    const signer = await getSigner();

    const proposals = extractProposals(process.argv);

    const ballotFactory = new Ballot__factory(signer);

    console.log("Deploying contract");
    const ballotContract = await ballotFactory.deploy(proposals);

    console.log("Awaiting confirmation");
    const txConf = await ballotContract.deployTransaction.wait();
    console.log(`Contract deployed, address ${ballotContract.address}, block number ${txConf.blockNumber}`);
}

function extractProposals(args: string[]) {
    const proposals = args.slice(2);
    validateProposals(proposals);

    console.log("Proposals: ");
    proposals.forEach((element, index) => {
        console.log(`Proposal N. ${index + 1}: ${element}`);
    });

    return convertStringArrayToBytes32(proposals);
}

function validateProposals(proposals: string[]) {
    if (proposals.length <= 0) {
        throw new Error("Missing Argument Proposals");
    }
}

function convertStringArrayToBytes32(array: string[]) {
    const bytes32Array = [];
    for (let index = 0; index < array.length; index++) {
        bytes32Array.push(ethers.utils.formatBytes32String(array[index]));
    }
    return bytes32Array;
}
