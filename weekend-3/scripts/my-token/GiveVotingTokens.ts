import { getDeployerSigner, getAccount1Signer } from '../helper/SignerHelper'
import { attachToMyToken } from '../helper/ContractHelper'
import { extractInputData } from '../helper/InputDataHelper';
import { MyToken } from '../../typechain-types';

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

    const myTokenContract = attachToMyToken(deployer, myTokenContractAddress);

    const mintAmount = 100;
    mint(myTokenContract, deployer.address, mintAmount);
    mint(myTokenContract, account1.address, mintAmount/2);
}

async function mint(myTokenContract: MyToken, address: string, mintAmount: number) {
    console.log(`Minting tokens`);
    const mintTx = await myTokenContract.mint(address, mintAmount);
    const mintTxReceipt = mintTx.wait();
    console.log(`Minted ${mintAmount} tokens to address ${address} in tx ${(await mintTxReceipt).transactionHash}, block ${(await mintTxReceipt).blockNumber}`);
}