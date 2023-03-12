import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ethers } from 'ethers';

@Injectable()
export class SignerService {

    private deployer: ethers.Wallet | undefined;

    constructor(private configService: ConfigService) {
        this.loadDeployer();
    }

    getDeployer(): ethers.Wallet {
        return this.deployer;
    }

    private loadDeployer(): void {
        const provider = this.getProvider();
        const mnemonic = this.getMnemonic();

        const wallet = ethers.Wallet.fromMnemonic(mnemonic);
        this.deployer = wallet.connect(provider);
    }

    private getMnemonic(): string {
        return this.configService.get<string>('DEPLOYER_MNEMONIC');
    }
    
    private getProvider(): ethers.providers.BaseProvider {
        const network = this.configService.get<string>('NETWORK');
        const infuraKey = this.configService.get<string>('INFURA_API_KEY');
        return new ethers.providers.InfuraProvider(network, infuraKey);
    }
}
