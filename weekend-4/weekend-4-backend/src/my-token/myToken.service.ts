import { Injectable } from '@nestjs/common';
import { SignerService } from 'src/signer/signer.service';
import { ethers } from 'ethers';
import * as myTokenContractData from '../assets/MyToken.json';
import { ConfigService } from '@nestjs/config';
import { MintResponse, MyTokenAddressResponse } from './myToken.model';

@Injectable()
export class MyTokenService {

    private myTokenContract: ethers.Contract;

    constructor(private configService: ConfigService, private signerService: SignerService) {
        this.loadContract();
    }

    async mint(address: string, amount: number): Promise<MintResponse> {
        const mintTx = await this.myTokenContract.mint(address, amount);
        const mintTxReceipt = await mintTx.wait();

        return new MintResponse(mintTxReceipt.transactionHash, mintTxReceipt.blockNumber);
    }
    
    private loadContract() {
        const deployer = this.signerService.getDeployer();
        const myTokenContractAddress = this.configService.get<string>('MY_TOKEN_CONTRACT_ADDRESS');
        this.myTokenContract = new ethers.Contract(myTokenContractAddress, myTokenContractData.abi, deployer);
    }

    getAddress(): MyTokenAddressResponse {
        return new MyTokenAddressResponse(this.myTokenContract.address);
    }
}
