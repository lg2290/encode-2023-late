import { ethers } from "hardhat";
import { ERC20Votes__factory, MyToken__factory } from "../typechain-types";

const MINT_VALUE = ethers.utils.parseEther("10");

async function main() {
    // Deploy Contract
    const [deployer, account1, account2] = await ethers.getSigners();
    const contractFactory = new MyToken__factory(deployer);
    const contract = await contractFactory.deploy();
    const txReceipt = await contract.deployTransaction.wait();
    console.log(`Contract address ${contract.address} deployed at block ${txReceipt.blockNumber}`);
    
    // Mint some tokens
    const mintTx = await contract.mint(account1.address, MINT_VALUE);
    const mintTxReceipt = await mintTx.wait();
    console.log(`Minted ${MINT_VALUE} to ${account1.address}`);

    const account1Balance = await contract.balanceOf(account1.address);
    console.log(`balance ${account1Balance}`); //ehter utils format ether

    let account1Votes = await contract.getVotes(account1.address);
    console.log(`Vote power ${account1Votes}`)

    //Self delegate
    const delegateTx = await contract.connect(account1).delegate(account1.address);
    const delegateTxReceipt = await delegateTx.wait();
    console.log(`Delegated to ${account1.address}`);

    // Check the voting power
    account1Votes = await contract.getVotes(account1.address);
    console.log(`Vote power ${account1Votes}`);

    //Transfer
    const tranferTx = await contract.connect(account1).transfer(account2.address, MINT_VALUE.div(2));
    const tranferTxReceipt = await tranferTx.wait();
    console.log(`Delegated to ${account1.address}`);

    // Check the voting power
    account1Votes = await contract.getVotes(account1.address);
    console.log(`Vote power ${account1Votes}`);

    let account2Votes = await contract.getVotes(account2.address);
    console.log(`Vote power ${account2Votes}`);

    // History Vote Power
    //get current block getBlock("latest")
    account1Votes = await contract.getPastVotes(account1.address, 0);
    console.log(`Vote power ${account1Votes}`);
    account1Votes = await contract.getPastVotes(account1.address, 1);
    console.log(`Vote power ${account1Votes}`);
    account1Votes = await contract.getPastVotes(account1.address, 2);
    console.log(`Vote power ${account1Votes}`);
    account1Votes = await contract.getPastVotes(account1.address, 3);
    console.log(`Vote power ${account1Votes}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});