import { extractInputData } from '../helper/InputDataHelper';
import { getDeployerSigner } from '../helper/SignerHelper'
import { attachToTokenizedBalot } from '../helper/ContractHelper'
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

    const tokenizedBallotContract = attachToTokenizedBalot(deployer, tokenBallotContractAddress);
    const winningProposalIndex = await tokenizedBallotContract.winningProposal();
    const winningProposal = await tokenizedBallotContract.proposals(winningProposalIndex);
    const winningProposalNameDecoded = ethers.utils.parseBytes32String(winningProposal[0]);
    console.log(`Proposal ${winningProposalNameDecoded}, index ${winningProposalIndex}, winning with ${winningProposal[1]} votes`);
}