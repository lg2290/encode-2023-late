import { ethers } from "ethers";
import * as dotenv from 'dotenv';

dotenv.config();

class Constants {
    static readonly PROVIDER_GOERLI = "goerli";
}

export async function getSigner(): Promise<ethers.Wallet> {
    const provider = ethers.getDefaultProvider(Constants.PROVIDER_GOERLI);
    const mnemonic = getMnemonic();

    //const wallet = ethers.Wallet.createRandom();
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    const signer = wallet.connect(provider);

    const balance = await signer.getBalance();
    console.log(`Signer address ${signer.address}, balance ${balance}`)

    return signer;
}

function getMnemonic() {
    const mnemonic = process.env.MNEMONIC;
    if (isEmpty(mnemonic)) {
        throw new Error("Missing Mnemonic to restore wallet");
    }

    return mnemonic!;
}

function isEmpty(str: string | undefined) {
    return !str || str.length <= 0
}
