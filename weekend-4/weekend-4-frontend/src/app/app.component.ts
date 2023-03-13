import { Component } from '@angular/core';
import { ethers, utils } from 'ethers';
import myTokenJson from "../assets/MyToken.json";
import ballotJson from "../assets/TokenizedBallot.json";
import { HttpClient } from '@angular/common/http';
import { BallotAddressResponse, DelegateResult, MyTokenAddressResponse, MintRequest, MintResponse } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tokenized Ballot';
  subtitle = 'Encode Bootcamp - Weekend 4 Project - Team 1';
  provider: ethers.providers.BaseProvider | undefined;
  network: string | undefined;
  block: number | undefined;
  
  signer: ethers.Wallet | undefined;
  signerEthBalance: number | undefined;
  signerMyTokenBalance: number | undefined;

  myTokenContract: ethers.Contract | undefined;
  mints: Array<MintResponse> = new Array();
  delegates: Array<DelegateResult> = new Array();

  ballotSnapshotBlock: number | undefined;
  ballotContract: ethers.Contract | undefined;

  winningProposalIndex: number | undefined;
  winningProposalName: string | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.provider = ethers.providers.getDefaultProvider('sepolia');
    this.network = this.provider.network.name;
    this.provider.getBlockNumber().then(blockNumber => this.block = blockNumber);
  }
  
  connectWallet(privateKey: string) {
    const wallet = new ethers.Wallet(privateKey);
    this.signer = wallet.connect(this.provider!);
    this.signer.getBalance().then(balance => {
      this.signerEthBalance = parseFloat(utils.formatEther(balance))
    });
    this.connectToMyTokenContract();
  }

  disconnectWallet(): void {
    this.signer = undefined;
  }

  myTokenAddressUrl = "http://localhost:3000/my-token/address";

  connectToMyTokenContract() {
    this.http.get<MyTokenAddressResponse>(this.myTokenAddressUrl)
      .subscribe(addressResponse => {
        this.myTokenContract = new ethers.Contract(addressResponse.address, myTokenJson.abi, this.signer);
        this.getMtkBalance();
      });
  }

  getMtkBalance(): void {
    this.myTokenContract!['balanceOf'](this.signer!.address).then((balance: ethers.BigNumberish) => {
      this.signerMyTokenBalance = parseFloat(utils.formatEther(balance))
    })
  }

  public mintingMtk = false;

  myTokenMintUrl = "http://localhost:3000/my-token/mint";

  mintMtk(amount: string) {
    this.mintingMtk = true;
    const requestBody = new MintRequest(this.signer!.address, parseFloat(amount));
    this.http.post<MintResponse>(this.myTokenMintUrl, requestBody).subscribe(
      response => {
        this.getMtkBalance();
        this.mints.push(response);
        this.mintingMtk = false;
      }
    )
  }

  public delegatingMtk = false;

  delegateMtk(addressToDelegate: string) {
    this.delegatingMtk = true;
    this.myTokenContract!['delegate'](addressToDelegate)
      .then((delegateTransaction: ethers.ContractTransaction) => delegateTransaction.wait())
      .then((receipt: ethers.ContractReceipt) => {
        this.delegates.push(new DelegateResult(receipt.transactionHash, receipt.blockNumber));
        this.delegatingMtk = false;
      });
  }

  ballotAddressUrl = "http://localhost:3000/ballot/address?snapshot-block=";

  public gettingBallot = false;

  getBallot(blockNumber: string) {
    this.ballotSnapshotBlock = parseInt(blockNumber);

    this.gettingBallot = true;
    this.http.get<BallotAddressResponse>(this.ballotAddressUrl+this.ballotSnapshotBlock)
      .subscribe(addressResponse => {
        this.ballotContract = new ethers.Contract(addressResponse.address, ballotJson.abi, this.signer);
        this.gettingBallot = false;
      });
  }

  disconnectBallot() {
    this.ballotContract = undefined;
  }

  public voting = false;

  vote(proposalIndex: string, votesAmount: string) {
    const proposal = parseInt(proposalIndex);
    const votes = parseInt(votesAmount);

    this.voting = true;
    this.ballotContract!['vote'](proposal, votes)
      .then((transaction: ethers.ContractTransaction) => transaction.wait())
      .then((receipt: ethers.ContractReceipt) => {
        this.voting = false;
      });
  }

  public gettingResult = false;

  getResult() {
    this.gettingResult = true;
    this.ballotContract!['winningProposal']()
      .then((winningProposal: ethers.BigNumber) => {
        this.winningProposalIndex = winningProposal.toNumber();
        return this.ballotContract!['proposals'](this.winningProposalIndex);
      }).then((proposal: [string, ethers.BigNumber]) => {
        this.winningProposalName = ethers.utils.parseBytes32String(proposal[0])
        this.gettingResult = false;
      });
  }

}
