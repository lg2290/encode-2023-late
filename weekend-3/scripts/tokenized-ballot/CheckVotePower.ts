import { getDeployerSigner, getAccount1Signer } from '../helper/SignerHelper'
import { attachToTokenizedBalot } from '../helper/ContractHelper'
import { extractInputData } from '../helper/InputDataHelper';
import { TokenizedBallot } from '../../typechain-types';

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

    const tokenizedBallotContract = attachToTokenizedBalot(deployer, tokenBallotContractAddress);

    await getVotePower(tokenizedBallotContract, deployer.address);
    await getVotePower(tokenizedBallotContract, account1.address);
}

async function getVotePower(tokenizedBallotContract: TokenizedBallot, address: string) {
    console.log(`Getting voting power to address ${address}`);
    const accountVotePower = await tokenizedBallotContract.votePower(address);
    console.log(`Account ${address} vote power is ${accountVotePower}`);
}
