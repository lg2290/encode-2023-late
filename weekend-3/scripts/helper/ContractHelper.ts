import { ethers } from "ethers";
import { MyToken, MyToken__factory } from "../../typechain-types";
import { TokenizedBallot } from "../../typechain-types/contracts/TokenizedBallot.sol";
import { TokenizedBallot__factory } from "../../typechain-types/factories/contracts/TokenizedBallot.sol";

export function attachToTokenizedBalot(signer: ethers.Wallet, deployedContract: string): TokenizedBallot {
    const factory = new TokenizedBallot__factory(signer);
    
    console.log(`Attaching ballot to address ${deployedContract}`);
    return factory.attach(deployedContract);
}

export function attachToMyToken(signer: ethers.Wallet, deployedContract: string): MyToken {
    const factory = new MyToken__factory(signer);
    
    console.log(`Attaching MyToken to address ${deployedContract}`);
    return factory.attach(deployedContract);
}
