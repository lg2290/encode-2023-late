import { TokenizedBallot } from '../typechain-types/contracts/TokenizedBallot.sol';
import { getDeployerSigner } from './helper/SignerHelper'
import { attachToBalot } from './helper/ContractHelper'

main().catch(handleGlobalError);

function handleGlobalError(error: any) {
    console.error(error);
    process.exitCode = 1;
}

async function main() {
    const inputData: string[] = extractInputData(process.argv);

    const signer = await getDeployerSigner();

    const ballotContract = attachToBalot(signer, inputData[0]);

    delegateVote(ballotContract, inputData[1]);
}

function extractInputData(argv: string[]): string[] {
    const dataValues: string[] = argv.slice(2);

    validateInputDataValues(dataValues);
    
    return dataValues;
}

function validateInputDataValues(dataValues: string[]) {
    if(dataValues.length < 2) {
        throw new Error("Missing contract address and/or contract to delegate vote to");
    }
}

async function delegateVote(ballotContract: TokenizedBallot, contractToDelegate: string) {
    console.log(`Delegating vote to ${contractToDelegate}`);
    const delegateTransaction = await ballotContract.delegate(contractToDelegate);

    console.log("Awaiting confirmation");
    const confirmation = await delegateTransaction.wait();
    console.log(`Delegated vote to ${contractToDelegate} in transaction ${confirmation.transactionHash}`);
}
