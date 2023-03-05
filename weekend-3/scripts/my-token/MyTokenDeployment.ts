import * as dotenv from 'dotenv';
import { getDeployerSigner } from '../helper/SignerHelper';
import { MyToken__factory } from "../../typechain-types";

dotenv.config();

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

async function main() {
    const deployer = await getDeployerSigner();

    const myTokenFactory = new MyToken__factory(deployer);
    console.log(`Deploying MyToken contract`);
    const myTokenContract = await myTokenFactory.deploy();

    console.log("Awaiting confirmation");
    const txConf = await myTokenContract.deployTransaction.wait();
    console.log(`Contract deployed, address ${myTokenContract.address}, block number ${txConf.blockNumber}`);    
}