import { ethers } from "ethers";
import * as dotenv from 'dotenv';

dotenv.config();

class Constants {
    static readonly PROVIDER_GOERLI = "goerli";
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
    const provider = ethers.getDefaultProvider(Constants.PROVIDER_GOERLI);

    const wallet = new ethers.Wallet(privateKey);
    const signer = wallet.connect(provider);

    const balance = await signer.getBalance();
    console.log(`Signer address ${signer.address}, balance ${balance}`)

    return signer;
}

async function getSignerFromMnemonic(mnemonic: string): Promise<ethers.Wallet> {
    const provider = ethers.getDefaultProvider(Constants.PROVIDER_GOERLI);

    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    const signer = wallet.connect(provider);

    const balance = await signer.getBalance();
    console.log(`Signer address ${signer.address}, balance ${balance}`)

    return signer;
}

async function getSignerFromRandomWallet(): Promise<ethers.Wallet> {
    const provider = ethers.getDefaultProvider(Constants.PROVIDER_GOERLI);

    const wallet = ethers.Wallet.createRandom();
    const signer = wallet.connect(provider);

    const balance = await signer.getBalance();
    console.log(`Signer address ${signer.address}, balance ${balance}`)

    return signer;
}
