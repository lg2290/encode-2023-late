import { Injectable } from '@nestjs/common';
import { SignerService } from 'src/signer/signer.service';
import { ethers } from 'ethers';
import * as ballotContract from '../assets/TokenizedBallot.json';
import { ConfigService } from '@nestjs/config';
import { BallotAddressResponse } from './ballot.model';

@Injectable()
export class BallotService {

  private addressBySnapshot = new Map<number, string>();
  private proposals = new Array<string>();

  constructor(private configService: ConfigService, 
    private signerService: SignerService) {
      this.loadProposals();
  }

  async getAddress(snapshotBlock: number): Promise<BallotAddressResponse> {
    if(this.alreadyDeployed(snapshotBlock)) {
      return Promise.resolve(new BallotAddressResponse(this.addressBySnapshot.get(snapshotBlock)));
    }

    const address = await this.deployAndGetAddress(snapshotBlock);
    return new BallotAddressResponse(address);
  }

  private alreadyDeployed(snapshotBlock: number): boolean {
    return this.addressBySnapshot.has(snapshotBlock);
  }

  private async deployAndGetAddress(snapshotBlock: number): Promise<string> {
    const deployer = this.signerService.getDeployer();
    const factory = new ethers.ContractFactory(ballotContract.abi, ballotContract.bytecode, deployer);
    const myTokenContractAddress = this.configService.get<string>('MY_TOKEN_CONTRACT_ADDRESS');

    const contract = await factory.deploy(this.proposals, myTokenContractAddress, snapshotBlock);
    await contract.deployTransaction.wait();

    const address = contract.address;
    this.addressBySnapshot.set(snapshotBlock, address);

    return address;
  }

  private loadProposals(): void {
    const proposalStrings = ['ONE', 'TWO', 'THREE'];
    proposalStrings.forEach(proposal => {
      this.proposals.push(ethers.utils.formatBytes32String(proposal))
    })
  }
}
