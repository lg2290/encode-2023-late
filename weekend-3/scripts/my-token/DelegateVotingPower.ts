import { getDeployerSigner, getAccount1Signer } from '../helper/SignerHelper'
import { attachToMyToken } from '../helper/ContractHelper'
import { extractInputData } from '../helper/InputDataHelper';
import { ethers } from 'ethers';

main().catch(handleGlobalError);

function handleGlobalError(error: any) {
    console.error(error);
    process.exitCode = 1;
}

async function main() {
    const inputData: string[] = extractInputData(process.argv, 1);
    const myTokenContractAddress = inputData[0];

    const deployer = await getDeployerSigner();
    const account1 = await getAccount1Signer();

    delegateVote(deployer, myTokenContractAddress, account1.address);
    delegateVote(account1, myTokenContractAddress, deployer.address);
}

async function delegateVote(signer: ethers.Wallet, myTokenContractAddress: string, addressToDelegateTo: string) {
    const myTokenContract = attachToMyToken(signer, myTokenContractAddress);

    console.log(`Delegating vote to ${addressToDelegateTo}`);
    const delegateTransaction = await myTokenContract.delegate(addressToDelegateTo);

    console.log("Awaiting confirmation");
    const confirmation = await delegateTransaction.wait();
    console.log(`Delegated vote to ${addressToDelegateTo} in transaction ${confirmation.transactionHash}, block ${confirmation.blockNumber}`);
}
