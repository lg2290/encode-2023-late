import { getDeployerSigner, getAccount1Signer } from '../helper/SignerHelper'
import { attachToMyToken } from '../helper/ContractHelper'
import { extractInputData } from '../helper/InputDataHelper';
import { MyToken } from '../../typechain-types';

const karthiAddress = "0x7F36cba7Da4F7915bf5775cBF91f08F2F8f7b67a";
const dominicAddress = "0x5858769800844ab75397775Ca2Fa87B270F7FbBe";

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
    //await mint(myTokenContract, deployer.address, mintAmount);
    //await mint(myTokenContract, account1.address, mintAmount);
    //await mint(myTokenContract, karthiAddress, mintAmount);
    await mint(myTokenContract, dominicAddress, mintAmount);
}

async function mint(myTokenContract: MyToken, address: string, mintAmount: number) {
    console.log(`Minting tokens`);
    const mintTx = await myTokenContract.mint(address, mintAmount);
    const mintTxReceipt = await mintTx.wait();
    console.log(`Minted ${mintAmount} tokens to address ${address} in tx ${(await mintTxReceipt).transactionHash}, block ${(await mintTxReceipt).blockNumber}`);
}