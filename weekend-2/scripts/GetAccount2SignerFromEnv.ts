import { ethers } from "ethers";
import * as dotenv from 'dotenv';

dotenv.config();

class Constants {
    static readonly PROVIDER_GOERLI = "goerli";
}

export async function getSigner(): Promise<ethers.Wallet> {
    const provider = ethers.getDefaultProvider(Constants.PROVIDER_GOERLI);
    const privateKey = getPrivateKey();

    //const wallet = ethers.Wallet.createRandom();
    const wallet = new ethers.Wallet(privateKey);
    const signer = wallet.connect(provider);

    const balance = await signer.getBalance();
    console.log(`Signer address ${signer.address}, balance ${balance}`)

    return signer;
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
