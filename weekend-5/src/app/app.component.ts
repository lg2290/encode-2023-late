import { Component } from '@angular/core';
import { ethers, utils } from 'ethers';
import lotteryJson from "../assets/Lottery.json";
import lotteryTokenJson from "../assets/LotteryToken.json";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Main info ======================================================================
  title = 'Lottery dApp';
  subtitle = 'Encode Bootcamp - Weekend 5 Project - Team 1';
  provider: ethers.providers.BaseProvider | undefined;
  network: string | undefined;
  block: number | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.provider = ethers.providers.getDefaultProvider('sepolia');
    this.network = this.provider.network.name;
    this.provider.getBlockNumber().then(blockNumber => this.block = blockNumber);
  }

  // Signer ======================================================================
  signer: ethers.Wallet | undefined;
  signerEthBalance: number | undefined;

  connectWallet(privateKeyOrMnemonic: string) {
    privateKeyOrMnemonic = privateKeyOrMnemonic.trim();

    const wallet = this.getWallet(privateKeyOrMnemonic);
    this.signer = wallet.connect(this.provider!);
    this.signer.getBalance().then(balance => {
      this.signerEthBalance = parseFloat(utils.formatEther(balance))
    });
  }

  private getWallet(privateKeyOrMnemonic: string): ethers.Wallet {
    if(privateKeyOrMnemonic.includes(" ")){
      return ethers.Wallet.fromMnemonic(privateKeyOrMnemonic);
    } else {
      return new ethers.Wallet(privateKeyOrMnemonic);
    }
  }

  disconnectWallet(): void {
    this.signer = undefined;
    this.disconnectFromLottery();
  }

  // Lottery ======================================================================
  currentLottery: ethers.Contract | undefined;
  currentLotteryToken: ethers.Contract | undefined;
  createdLotteries = new Set<string>();
  createLotterySelected = false;
  connectToLotterySelected = false;

  selectCreateLottery(value: boolean) {
    this.createLotterySelected = value;
  }

  selectConnectToLottery(value: boolean) {
    this.connectToLotterySelected = value;
  }

  disconnectFromLottery() {
    this.currentLottery = undefined;
    this.currentLotteryToken = undefined;
    this.createLotterySelected = false;
    this.connectToLotterySelected = false;
    this.resetLotteryData();
  }

  // Create Lottery ===============================================================
  creatingContract = false;

  async createLottery(tokenName: string, tokenSymbol: string,
                ethTokenRation: string, betPrice: string, betFee: string) {
    try {
      this.creatingContract = true;
      const factory = new ethers.ContractFactory(lotteryJson.abi, lotteryJson.bytecode, this.signer);

      const contract = await factory.deploy(tokenName, tokenSymbol, parseFloat(ethTokenRation),
        ethers.utils.parseEther(parseFloat(betPrice).toFixed(18)),
        ethers.utils.parseEther(parseFloat(betFee).toFixed(18)));
      await contract.deployTransaction.wait();
  
      this.currentLottery = contract;
      this.createdLotteries.add(contract.address);
      await this.loadLotteryData();

      this.selectCreateLottery(false);
    } catch(error: any) {
      console.log(error);
    } finally {
      this.creatingContract = false;
    }
  }

  // Connecting To Lottery ===============================================================
  connectingToContract = false

  async connectToLottery(lotteryContractAddress: string) {
    try {
      this.connectingToContract = true;
      this.currentLottery = new ethers.Contract(lotteryContractAddress, lotteryJson.abi, this.signer);

      await this.loadLotteryData();
    } catch(error: any) {
      console.log
    } finally {
      this.connectingToContract = false;
    }
  }

  // Load Lottery For User ===============================================================
  loadingLotteryData = false;
  lotteryOwnerAddress: string | undefined;
  isLotteryOwner = false;
  betPrice: string | undefined;
  betFee: string | undefined;
  purchaseRatio: number | undefined;
  betsOpen: boolean | undefined;
  betsClosingTime: number | undefined;
  lotteryStatus: string | undefined;
  betsDurationDefined: boolean | undefined;
  betsPeriodFinished: boolean | undefined;
  lotteryAllowedToSpendTokens = false;
  signerTokenBalance: ethers.BigNumberish | undefined;
  signerTokenBalanceString: string | undefined;
  signerHasTokens = false;
  signerHasPrize = false;
  signerPrize: ethers.BigNumberish | undefined;
  signerPrizeString: string | undefined;
  ownerPoolHasValue = false;
  ownerPoolValue: ethers.BigNumberish | undefined;
  ownerPoolValueString: string | undefined;


  async loadLotteryData() {
    try {
      if(this.currentLottery) {
        this.loadingLotteryData = true;
        this.lotteryOwnerAddress = await this.currentLottery['owner']();
        this.isLotteryOwner = this.signer!.address == this.lotteryOwnerAddress;
        this.betPrice = ethers.utils.formatEther(await this.currentLottery['betPrice']());
        this.betFee = ethers.utils.formatEther(await this.currentLottery['betFee']());
        this.purchaseRatio = await this.currentLottery['purchaseRatio']();
  
        await this.checkBetInfo();
        await this.checkSignerPrize();
        await this.checkOwnerPool();
        await this.loadTokenContract();
        await this.checkAllowance();
        await this.checkSignerTokenBalance();

        this.updateStatus();
      }
    } catch(error: any) {
      console.log(error);
    } finally {
      this.loadingLotteryData = false;
    }
  }

  private async checkBetInfo() {
    this.betsOpen = await this.currentLottery!['betsOpen']();
    this.betsClosingTime = await this.currentLottery!['betsClosingTime']();
  }

  private async checkSignerPrize() {
    this.signerPrize = await this.currentLottery!['prize'](this.signer!.address);
    this.signerPrizeString = ethers.utils.formatEther(this.signerPrize!);
    this.signerHasPrize = this.signerPrize! > 0;
  }

  private async checkOwnerPool() {
    this.ownerPoolValue = await this.currentLottery!['ownerPool']();
    this.ownerPoolValueString = ethers.utils.formatEther(this.ownerPoolValue!);
    this.ownerPoolHasValue = this.ownerPoolValue! > 0;
  }

  private async loadTokenContract() {
    const tokenAddress = await this.currentLottery!['paymentToken']();
    this.currentLotteryToken = new ethers.Contract(tokenAddress, lotteryTokenJson.abi, this.signer);
  }

  private async checkAllowance() {
    const allowanceAmount = await this.currentLotteryToken!['allowance'](this.signer!.address, this.currentLottery!.address);
    this.lotteryAllowedToSpendTokens = allowanceAmount > 0;
  }

  private async checkSignerTokenBalance() {
    this.signerTokenBalance = await this.currentLotteryToken!['balanceOf'](this.signer!.address);
    this.signerTokenBalanceString = ethers.utils.formatEther(this.signerTokenBalance!);
    this.signerHasTokens = this.signerTokenBalance! > 0;
  }

  updateStatus() {    
    this.betsDurationDefined = !!this.betsClosingTime && (this.betsClosingTime > 0);
    this.betsPeriodFinished = this.betsDurationDefined && ((this.betsClosingTime! * 1000) < Date.now())
    if(!this.betsOpen && !this.betsDurationDefined) {
      this.lotteryStatus = "Bets not openned yet!";
    } else if(this.betsOpen && !this.betsPeriodFinished) {
      this.lotteryStatus = "Bets openned!";  
    } else if(this.betsOpen && this.betsPeriodFinished) {
      this.lotteryStatus = "Betting period finished, Lottery ready to close!";  
    } else {
      this.lotteryStatus = "Lottery closed, check results!";  
    }
  }

  processingStatusChange = false;

  async openBets(duration: string) {
    try{
      this.processingStatusChange = true;
      const currentBlock = await this.provider!.getBlock("latest");
      const tx = await this.currentLottery!['openBets'](currentBlock.timestamp + Number(duration));
      await tx.wait();
    
      await this.checkBetInfo();
      this.updateStatus();
    } catch(error: any) {
      console.log(error);
    } finally {
      this.processingStatusChange = false;
    }
  }

  async buyTokens(buyAmount: string) {
    try{
      this.processingStatusChange = true;

      const amount = ethers.utils.parseEther(buyAmount).div(this.purchaseRatio!);
      const tx = await this.currentLottery!['purchaseTokens']({value: amount});
      await tx.wait();

      await this.checkSignerTokenBalance();
      this.updateStatus();
    } catch(error: any) {
      console.log(error);
    } finally {
      this.processingStatusChange = false;
    }
  }

  async allowanceToSpend() {
    try{
      this.processingStatusChange = true;
      const allowanceTx = await this.currentLotteryToken!['approve'](this.currentLottery!.address, ethers.constants.MaxUint256);
      await allowanceTx.wait();

      await this.checkAllowance();
      this.updateStatus();
    } catch(error: any) {
      console.log(error);
    } finally {
      this.processingStatusChange = false;
    }
  }

  async bet(betAmount: string) {
    try{
      this.processingStatusChange = true;

      const tx = await this.currentLottery!['betMany'](parseInt(betAmount));
      await tx.wait();

      await this.checkSignerTokenBalance();
      await this.checkOwnerPool();

      this.updateStatus();
    } catch(error: any) {
      console.log(error);
    } finally {
      this.processingStatusChange = false;
    }
  }

  async closeLottery() {
    try{
      this.processingStatusChange = true;
      const tx = await this.currentLottery!['closeLottery']();
      await tx.wait();

      await this.checkBetInfo();
      await this.checkSignerPrize();
      await this.checkOwnerPool();

      this.updateStatus();
    } catch(error: any) {
      console.log(error);
    } finally {
      this.processingStatusChange = false;
    }
  }

  async claimPrize() {
    try{
      this.processingStatusChange = true;

      const tx = await this.currentLottery!['prizeWithdraw'](this.signerPrize);
      tx.wait();

      await this.checkSignerTokenBalance();
      await this.checkSignerPrize();
    } catch(error: any) {
      console.log(error);
    } finally {
      this.processingStatusChange = false;
    }
  }

  async withdrawOwnerPool() {
    try{
      this.processingStatusChange = true;
      const tx = await this.currentLottery!['ownerWithdraw'](this.ownerPoolValue);
      await tx.wait();
    
      await this.checkSignerTokenBalance();
      await this.checkOwnerPool();
    } catch(error: any) {
      console.log(error);
    } finally {
      this.processingStatusChange = false;
    }
  }

  async burnTokens() {
    try{
      this.processingStatusChange = true;
      while(!this.lotteryAllowedToSpendTokens) {
        console.log("aqui" + this.lotteryAllowedToSpendTokens)
        await this.allowanceToSpend();
        await this.checkAllowance();
      }

      const tx = await this.currentLottery!['returnTokens'](this.signerTokenBalance);
      await tx.wait();

      await this.checkSignerTokenBalance();
      this.signer!.getBalance().then(balance => {
        this.signerEthBalance = parseFloat(utils.formatEther(balance))
      });
    } catch(error: any) {
      console.log(error);
    } finally {
      this.processingStatusChange = false;
    }
  }

  // Reset Lottery Data ===============================================================
  resetLotteryData() {
    this.loadingLotteryData = false;
    this.lotteryOwnerAddress = undefined;
    this.isLotteryOwner = false;
    this.betPrice = undefined;
    this.betFee = undefined;
    this.purchaseRatio = undefined;
    this.betsOpen = undefined;
    this.betsClosingTime= undefined;
    this.lotteryStatus = undefined;
    this.betsDurationDefined = undefined;
    this.betsPeriodFinished = undefined;
    this.lotteryAllowedToSpendTokens = false;
    this.signerTokenBalance = undefined;
    this.signerTokenBalanceString = undefined;
    this.signerHasTokens = false;
    this.signerHasPrize = false;
    this.signerPrize = undefined;
    this.signerPrizeString = undefined;
    this.ownerPoolHasValue = false;
    this.ownerPoolValue = undefined;
    this.ownerPoolValueString = undefined;
  }

}
