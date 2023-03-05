import { ethers } from "ethers";
import * as dotenv from 'dotenv';

dotenv.config();

class Constants {
    static readonly GOERLI_NETWORK = "goerli";
    static readonly SEPOLIA_NETWORK = "sepolia";
}

export async function getDeployerSigner(): Promise<ethers.Wallet> {
    const mnemonic = getMnemonic();

    return getSignerFromMnemonic(mnemonic);
}

export async function getAccount1Signer(): Promise<ethers.Wallet> {
    const privateKey = getPrivateKey();

    return getSignerFromPrivateKey(privateKey);
}

function getMnemonic() {
    const mnemonic = process.env.MNEMONIC;
    if (isEmpty(mnemonic)) {
        throw new Error("Missing Mnemonic to restore wallet");
    }

    return mnemonic!;
}

function getPrivateKey() {
    const privateKey = process.env.PRIVATE_KEY_ACCOUNT_2;
    if (isEmpty(privateKey)) {
        throw new Error("Missing private key to restore wallet for Account 2");
    }

    return privateKey!;
}

function isEmpty(str: string | undefined) {
    return !str || str.length <= 0
}

async function getSignerFromPrivateKey(privateKey: string): Promise<ethers.Wallet> {
    const provider = getProvider();

    const wallet = new ethers.Wallet(privateKey);
    const signer = wallet.connect(provider);

    const balance = await signer.getBalance();
    console.log(`Signer address ${signer.address}, balance ${balance}`)

    return signer;
}

async function getSignerFromMnemonic(mnemonic: string): Promise<ethers.Wallet> {
    const provider = getProvider();

    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    const signer = wallet.connect(provider);

    const balance = await signer.getBalance();
    console.log(`Signer address ${signer.address}, balance ${balance}`)

    return signer;
}

async function getSignerFromRandomWallet(): Promise<ethers.Wallet> {
    const provider = getProvider();

    const wallet = ethers.Wallet.createRandom();
    const signer = wallet.connect(provider);

    const balance = await signer.getBalance();
    console.log(`Signer address ${signer.address}, balance ${balance}`)

    return signer;
}

function getProvider(): ethers.providers.BaseProvider {
    //return getDefault(Constants.GOERLI_NETWORK);

    return getInfura(Constants.SEPOLIA_NETWORK);
}

function getDefault(network: string) {
    console.log(`Using default provider on ${network} network`);
    return ethers.getDefaultProvider(Constants.GOERLI_NETWORK);
}

function getInfura(network: string) {
    console.log(`Using Infura provider on ${network} network`);
    return new ethers.providers.InfuraProvider(network, process.env.INFURA_API_KEY);
}