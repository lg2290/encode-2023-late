# Weekend 3 Project - Tokenized Ballot

* Deployer: [0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa](https://sepolia.etherscan.io/address/0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa)
* Account1: [0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D](https://sepolia.etherscan.io/address/0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D)

# MyToken

* MyToken Contract
    * address: [0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2](https://sepolia.etherscan.io/address/0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2)
    * block: 3029422

## MyTokenDeployment

```bash
yarn run ts-node --files scripts/my-token/MyTokenDeployment.ts
```

### Logs

<details>
    <summary>Success</summary>

[Tx 0xdd9d556ce2251a8859c940a2820c68eeb62b103f207bfdc38c4b11c0877d0c0b](https://sepolia.etherscan.io/tx/0xdd9d556ce2251a8859c940a2820c68eeb62b103f207bfdc38c4b11c0877d0c0b)
```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/my-token/MyTokenDeployment.ts
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 521640156000000000
Deploying MyToken contract
Awaiting confirmation
Contract deployed, address 0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2, tx 0xdd9d556ce2251a8859c940a2820c68eeb62b103f207bfdc38c4b11c0877d0c0b, block number 3029422
```

</details>

## GiveVotingTokens

```bash
yarn run ts-node --files scripts/my-token/GiveVotingTokens.ts [myTokenContractAddress]
```

### Logs

<details>
    <summary>Error - Missing Args</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/my-token/GiveVotingTokens.ts
Error: Missing input data
    at validateInputDataSize (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/helper/InputDataHelper.ts:11:15)
    at extractInputData (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/helper/InputDataHelper.ts:4:5)
    at main (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/my-token/GiveVotingTokens.ts:17:49)
    at Object.<anonymous> (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/my-token/GiveVotingTokens.ts:9:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module.m._compile (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/ts-node/src/index.ts:1618:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Object.require.extensions.<computed> [as .ts] (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Function.Module._load (node:internal/modules/cjs/loader:958:12)
```

</details>

<details>
    <summary>Error - Missing await:</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/my-token/GiveVotingTokens.ts 0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 515657360972080290
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2271692448000000000
Attaching MyToken to address 0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2
Minting tokens
Minting tokens
Minting tokens
Minting tokens
/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:269
        const error: any = new Error(message);
                        ^
Error: replacement fee too low [ See: https://links.ethers.org/v5-errors-REPLACEMENT_UNDERPRICED ] (error={"reason":"processing response error","code":"SERVER_ERROR","body":"{\"jsonrpc\":\"2.0\",\"id\":62,\"error\":{\"code\":-32000,\"message\":\"replacement transaction underpriced\"}}","error":{"code":-32000},"requestBody":"{\"method\":\"eth_sendRawTransaction\",\"params\":[\"0x02f8b383aa36a7018459682f008459682f0e8301e49094dcca0572ac7bf14576cf5d5e8e7cf31450157fa280b84440c10f19000000000000000000000000fc289231534c6f14efd0f2496550aa6cbfcf612d0000000000000000000000000000000000000000000000000000000000000032c080a02ef28c573241afb611865edde5578678ed5ad2b0090fd0a6879080f0ee501482a011035ed0e5a40f76092455590bfcdbe8887053d9bdccb5ac5523c2f153eaed8a\"],\"id\":62,\"jsonrpc\":\"2.0\"}","requestMethod":"POST","url":"https://sepolia.infura.io/v3/952510520d3947c99e9a81768e8db375"}, method="sendTransaction", transaction="0x02f8b383aa36a7018459682f008459682f0e8301e49094dcca0572ac7bf14576cf5d5e8e7cf31450157fa280b84440c10f19000000000000000000000000fc289231534c6f14efd0f2496550aa6cbfcf612d0000000000000000000000000000000000000000000000000000000000000032c080a02ef28c573241afb611865edde5578678ed5ad2b0090fd0a6879080f0ee501482a011035ed0e5a40f76092455590bfcdbe8887053d9bdccb5ac5523c2f153eaed8a", code=REPLACEMENT_UNDERPRICED, version=providers/5.7.2)
    at Logger.makeError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at checkError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:112:16)
    at InfuraProvider.<anonymous> (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:642:20)
    at step (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:48:23)
    at Object.throw (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:29:53)
    at rejected (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:21:65)
    at processTicksAndRejections (node:internal/process/task_queues:95:5) {
reason: 'replacement fee too low',
code: 'REPLACEMENT_UNDERPRICED',
error: Error: processing response error (body="{\"jsonrpc\":\"2.0\",\"id\":62,\"error\":{\"code\":-32000,\"message\":\"replacement transaction underpriced\"}}", error={"code":-32000}, requestBody="{\"method\":\"eth_sendRawTransaction\",\"params\":[\"0x02f8b383aa36a7018459682f008459682f0e8301e49094dcca0572ac7bf14576cf5d5e8e7cf31450157fa280b84440c10f19000000000000000000000000fc289231534c6f14efd0f2496550aa6cbfcf612d0000000000000000000000000000000000000000000000000000000000000032c080a02ef28c573241afb611865edde5578678ed5ad2b0090fd0a6879080f0ee501482a011035ed0e5a40f76092455590bfcdbe8887053d9bdccb5ac5523c2f153eaed8a\"],\"id\":62,\"jsonrpc\":\"2.0\"}", requestMethod="POST", url="https://sepolia.infura.io/v3/952510520d3947c99e9a81768e8db375", code=SERVER_ERROR, version=web/5.7.1)
    at Logger.makeError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at /Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/src.ts/index.ts:341:28
    at step (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/lib/index.js:33:23)
    at Object.next (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/lib/index.js:14:53)
    at fulfilled (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/lib/index.js:5:58)
    at processTicksAndRejections (node:internal/process/task_queues:95:5) {
    reason: 'processing response error',
    code: 'SERVER_ERROR',
    body: '{"jsonrpc":"2.0","id":62,"error":{"code":-32000,"message":"replacement transaction underpriced"}}',
    error: Error: replacement transaction underpriced
        at getResult (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:142:28)
        at processJsonFunc (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/src.ts/index.ts:383:22)
        at /Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/src.ts/index.ts:320:42
        at step (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/lib/index.js:33:23)
        at Object.next (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/lib/index.js:14:53)
        at fulfilled (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/lib/index.js:5:58)
        at processTicksAndRejections (node:internal/process/task_queues:95:5) {
    code: -32000,
    data: undefined
    },
    requestBody: '{"method":"eth_sendRawTransaction","params":["0x02f8b383aa36a7018459682f008459682f0e8301e49094dcca0572ac7bf14576cf5d5e8e7cf31450157fa280b84440c10f19000000000000000000000000fc289231534c6f14efd0f2496550aa6cbfcf612d0000000000000000000000000000000000000000000000000000000000000032c080a02ef28c573241afb611865edde5578678ed5ad2b0090fd0a6879080f0ee501482a011035ed0e5a40f76092455590bfcdbe8887053d9bdccb5ac5523c2f153eaed8a"],"id":62,"jsonrpc":"2.0"}',
    requestMethod: 'POST',
    url: 'https://sepolia.infura.io/v3/952510520d3947c99e9a81768e8db375'
},
method: 'sendTransaction',
transaction: {
    type: 2,
    chainId: 11155111,
    nonce: 1,
    maxPriorityFeePerGas: BigNumber { _hex: '0x59682f00', _isBigNumber: true },
    maxFeePerGas: BigNumber { _hex: '0x59682f0e', _isBigNumber: true },
    gasPrice: null,
    gasLimit: BigNumber { _hex: '0x01e490', _isBigNumber: true },
    to: '0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2',
    value: BigNumber { _hex: '0x00', _isBigNumber: true },
    data: '0x40c10f19000000000000000000000000fc289231534c6f14efd0f2496550aa6cbfcf612d0000000000000000000000000000000000000000000000000000000000000032',
    accessList: [],
    hash: '0x50b9e03af37adc38e9119ccd154f251ba32f0ad0b4f8c9671d87054e5a3ffb40',
    v: 0,
    r: '0x2ef28c573241afb611865edde5578678ed5ad2b0090fd0a6879080f0ee501482',
    s: '0x11035ed0e5a40f76092455590bfcdbe8887053d9bdccb5ac5523c2f153eaed8a',
    from: '0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa',
    confirmations: 0
},
transactionHash: '0x50b9e03af37adc38e9119ccd154f251ba32f0ad0b4f8c9671d87054e5a3ffb40'
}
```

</details>

<details>
    <summary>Error - partial error (can't execute multiple transactions?):</summary>

[Tx 0x3dd9ed0d4a9b2e270d15705494e424c103985248b36c219d168a0d27974205e8](https://sepolia.etherscan.io/tx/0x3dd9ed0d4a9b2e270d15705494e424c103985248b36c219d168a0d27974205e8)
```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/my-token/GiveVotingTokens.ts 0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 515474470471226801
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2271692448000000000
Attaching MyToken to address 0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2
Minting tokens
Minted 100 tokens to address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa in tx 0x3dd9ed0d4a9b2e270d15705494e424c103985248b36c219d168a0d27974205e8, block 3029451
Minting tokens
Error: transaction failed [ See: https://links.ethers.org/v5-errors-CALL_EXCEPTION ] (transactionHash="0xad2c6ff8de66b315fa10d75f59b3fc1757c16f36644bbad1b9bcee32431549ca", transaction={"type":2,"chainId":11155111,"nonce":3,"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x59682f0e"},"gasPrice":null,"gasLimit":{"type":"BigNumber","hex":"0x0109d1"},"to":"0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2","value":{"type":"BigNumber","hex":"0x00"},"data":"0x40c10f19000000000000000000000000fc289231534c6f14efd0f2496550aa6cbfcf612d0000000000000000000000000000000000000000000000000000000000000032","accessList":[],"hash":"0xad2c6ff8de66b315fa10d75f59b3fc1757c16f36644bbad1b9bcee32431549ca","v":0,"r":"0x22657d09c9a2d477363d85edeec61a133fa7ded716ecf7022449c759b9b661b0","s":"0x7dce140ea1d8dca6d00ee16f819ab3102fc3042a65c9a273ecb8e9cd1f7064fa","from":"0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa","confirmations":0}, receipt={"to":"0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2","from":"0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa","contractAddress":null,"transactionIndex":2,"gasUsed":{"type":"BigNumber","hex":"0x0109d1"},"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","blockHash":"0x83d26c69aaa026ae148feb616a1067d0b272dc4a8b0876a6a471f336fd09bb88","transactionHash":"0xad2c6ff8de66b315fa10d75f59b3fc1757c16f36644bbad1b9bcee32431549ca","logs":[],"blockNumber":3029452,"confirmations":1,"cumulativeGasUsed":{"type":"BigNumber","hex":"0x04e2ad"},"effectiveGasPrice":{"type":"BigNumber","hex":"0x59682f07"},"status":0,"type":2,"byzantium":true}, code=CALL_EXCEPTION, version=providers/5.7.2)
    at Logger.makeError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at InfuraProvider.<anonymous> (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/src.ts/base-provider.ts:1549:24)
    at step (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/lib/base-provider.js:48:23)
    at Object.next (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/lib/base-provider.js:29:53)
    at fulfilled (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/lib/base-provider.js:20:58) {
  reason: 'transaction failed',
  code: 'CALL_EXCEPTION',
  transactionHash: '0xad2c6ff8de66b315fa10d75f59b3fc1757c16f36644bbad1b9bcee32431549ca',
  transaction: {
    type: 2,
    chainId: 11155111,
    nonce: 3,
    maxPriorityFeePerGas: BigNumber { _hex: '0x59682f00', _isBigNumber: true },
    maxFeePerGas: BigNumber { _hex: '0x59682f0e', _isBigNumber: true },
    gasPrice: null,
    gasLimit: BigNumber { _hex: '0x0109d1', _isBigNumber: true },
    to: '0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2',
    value: BigNumber { _hex: '0x00', _isBigNumber: true },
    data: '0x40c10f19000000000000000000000000fc289231534c6f14efd0f2496550aa6cbfcf612d0000000000000000000000000000000000000000000000000000000000000032',
    accessList: [],
    hash: '0xad2c6ff8de66b315fa10d75f59b3fc1757c16f36644bbad1b9bcee32431549ca',
    v: 0,
    r: '0x22657d09c9a2d477363d85edeec61a133fa7ded716ecf7022449c759b9b661b0',
    s: '0x7dce140ea1d8dca6d00ee16f819ab3102fc3042a65c9a273ecb8e9cd1f7064fa',
    from: '0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa',
    confirmations: 0,
    wait: [Function (anonymous)]
  },
  receipt: {
    to: '0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2',
    from: '0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa',
    contractAddress: null,
    transactionIndex: 2,
    gasUsed: BigNumber { _hex: '0x0109d1', _isBigNumber: true },
    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    blockHash: '0x83d26c69aaa026ae148feb616a1067d0b272dc4a8b0876a6a471f336fd09bb88',
    transactionHash: '0xad2c6ff8de66b315fa10d75f59b3fc1757c16f36644bbad1b9bcee32431549ca',
    logs: [],
    blockNumber: 3029452,
    confirmations: 1,
    cumulativeGasUsed: BigNumber { _hex: '0x04e2ad', _isBigNumber: true },
    effectiveGasPrice: BigNumber { _hex: '0x59682f07', _isBigNumber: true },
    status: 0,
    type: 2,
    byzantium: true
  }
}
```

</details>

<details>
    <summary>Success</summary>

[Tx 0x39a9bab33df0ab08464368f1a3448618b5f855ec2e3f168994084c7475396678](https://sepolia.etherscan.io/tx/0x39a9bab33df0ab08464368f1a3448618b5f855ec2e3f168994084c7475396678)
```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/my-token/GiveVotingTokens.ts 0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 515262437970237316
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2271692448000000000
Attaching MyToken to address 0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2
Minting tokens
Minted 100 tokens to address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa in tx 0x39a9bab33df0ab08464368f1a3448618b5f855ec2e3f168994084c7475396678, block 3029471
```

[Tx 0x4a0348a43248901d69a2f2bc73ed4992d2e7228443c94855d48a40bbd47d56a8](https://sepolia.etherscan.io/tx/0x4a0348a43248901d69a2f2bc73ed4992d2e7228443c94855d48a40bbd47d56a8)
```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/my-token/GiveVotingTokens.ts 0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 515050405469247831
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2271692448000000000
Attaching MyToken to address 0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2
Minting tokens
Minted 100 tokens to address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D in tx 0x4a0348a43248901d69a2f2bc73ed4992d2e7228443c94855d48a40bbd47d56a8, block 3029481
```

[Tx 0xadfa04a679a9767b1dfcac436b37dc34b5ed1fbf607d442fc5168035e510ae2a](https://sepolia.etherscan.io/tx/0xadfa04a679a9767b1dfcac436b37dc34b5ed1fbf607d442fc5168035e510ae2a)
```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/my-token/GiveVotingTokens.ts 0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 514812722968138646
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2271692448000000000
Attaching MyToken to address 0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2
Minting tokens
Minted 100 tokens to address 0x7F36cba7Da4F7915bf5775cBF91f08F2F8f7b67a in tx 0xadfa04a679a9767b1dfcac436b37dc34b5ed1fbf607d442fc5168035e510ae2a, block 3029485
```

[Tx 0xc4090a3c4b9824961637a8a898996df5353010b87bf2be978526b40d17cecd3b](https://sepolia.etherscan.io/tx/0xc4090a3c4b9824961637a8a898996df5353010b87bf2be978526b40d17cecd3b)
```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/my-token/GiveVotingTokens.ts 0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 514575058467029545
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2271692448000000000
Attaching MyToken to address 0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2
Minting tokens
Minted 100 tokens to address 0x5858769800844ab75397775Ca2Fa87B270F7FbBe in tx 0xc4090a3c4b9824961637a8a898996df5353010b87bf2be978526b40d17cecd3b, block 3029493
```

</details>

## DelegateVotingPower

```bash
yarn run ts-node --files scripts/my-token/DelegateVotingPower.ts [myTokenContractAddress]
```

### Logs

<details>
    <summary>Error - Missing Args</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/my-token/DelegateVotingPower.ts

Error: Missing input data
    at validateInputDataSize (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/helper/InputDataHelper.ts:11:15)
    at extractInputData (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/helper/InputDataHelper.ts:4:5)
    at main (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/my-token/DelegateVotingPower.ts:14:49)
    at Object.<anonymous> (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/my-token/DelegateVotingPower.ts:6:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module.m._compile (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/ts-node/src/index.ts:1618:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Object.require.extensions.<computed> [as .ts] (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Function.Module._load (node:internal/modules/cjs/loader:958:12)
```

</details>

<details>
    <summary>Success</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/my-token/DelegateVotingPower.ts
 0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 514439467466396787
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2271692448000000000
Attaching MyToken to address 0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2
Delegating vote to 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D
Awaiting confirmation
Delegated vote to 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D in transaction 0x1ed60cd036465cf18b3acd0fa07505ab443cb717aeddc4dac8b0784e1f96a879, block 3029652
Attaching MyToken to address 0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2
Delegating vote to 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa
Awaiting confirmation
Delegated vote to 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa in transaction 0x4e9c27301b72785281b4e7d681243cb63ade105e6863e71c7ff280d3f1adbfc4, block 3029653
```

</details>

# TokenizedBallot

## Scripts

### TokenizedBallotDeployment

```bash
yarn run ts-node --files scripts/tokenized-ballot/TokenizedBallotDeployment.ts [myTokenContractAddress] [blockNumber] [proposal1] [proposal2] [proposal3] ...
```

<details>
    <summary>Error - Missing Args</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/TokenizedBallotDeployment.ts
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 514294631965720888
Error: Missing input data
    at validateInputDataSize (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/helper/InputDataHelper.ts:11:15)
    at extractInputData (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/helper/InputDataHelper.ts:4:5)
    at main (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/tokenized-ballot/TokenizedBallotDeployment.ts:18:39)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
```

</details>

### CheckVotePower

```bash
yarn run ts-node --files scripts/tokenized-ballot/CheckVotePower.ts [tokenizedBallotContractAddress]
```

<details>
    <summary>Error - Missing Args</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/CheckVotePower.ts
Error: Missing input data
    at validateInputDataSize (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/helper/InputDataHelper.ts:11:15)
    at extractInputData (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/helper/InputDataHelper.ts:4:5)
    at main (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/tokenized-ballot/CheckVotePower.ts:14:49)
    at Object.<anonymous> (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/tokenized-ballot/CheckVotePower.ts:6:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module.m._compile (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/ts-node/src/index.ts:1618:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Object.require.extensions.<computed> [as .ts] (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Function.Module._load (node:internal/modules/cjs/loader:958:12)
```

</details>

### CastVotes

```bash
yarn run ts-node --files scripts/tokenized-ballot/CastVotes.ts [tokenizedBallotContractAddress]
```

<details>
    <summary>Error - Missing Args</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/CastVotes.ts
Error: Missing input data
    at validateInputDataSize (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/helper/InputDataHelper.ts:11:15)
    at extractInputData (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/helper/InputDataHelper.ts:4:5)
    at main (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/tokenized-ballot/CastVotes.ts:14:49)
    at Object.<anonymous> (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/tokenized-ballot/CastVotes.ts:6:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module.m._compile (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/ts-node/src/index.ts:1618:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Object.require.extensions.<computed> [as .ts] (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Function.Module._load (node:internal/modules/cjs/loader:958:12)
```

</details>

### QueryResults

```bash
yarn run ts-node --files scripts/tokenized-ballot/QueryResults.ts [tokenizedBallotContractAddress]
```

<details>
    <summary>Error - Missing Args</summary>

```bash
➜  weekend-3 git:(main) yarn run ts-node --files scripts/tokenized-ballot/QueryResults.ts
Error: Missing input data
    at validateInputDataSize (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/helper/InputDataHelper.ts:11:15)
    at extractInputData (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/helper/InputDataHelper.ts:4:5)
    at main (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/tokenized-ballot/QueryResults.ts:15:49)
    at Object.<anonymous> (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/scripts/tokenized-ballot/QueryResults.ts:7:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module.m._compile (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/ts-node/src/index.ts:1618:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Object.require.extensions.<computed> [as .ts] (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Function.Module._load (node:internal/modules/cjs/loader:958:12)
```

</details>


## Executions

### Before Mints - Block 3029422

* address: [0xECd44b59b2B937E8a29b54878018B396A23b4BdE](https://sepolia.etherscan.io/address/0xECd44b59b2B937E8a29b54878018B396A23b4BdE)
* block: 3030934

<details>
    <summary>TokenizedBallotDeployment</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/TokenizedBallotDeployment.ts 0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2 3029422 ONE TWO THREE
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 508181212437191597
Proposals:
Proposal N. 1: ONE
Proposal N. 2: TWO
Proposal N. 3: THREE
Deploying Tokenized Ballot contract, aiming vote power state in block 3029422
Awaiting confirmation
Contract deployed, address 0xECd44b59b2B937E8a29b54878018B396A23b4BdE, block number 3030934
```

</details>

<details>
    <summary>CheckVotePower</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/CheckVotePower.ts 0xECd44b59b2B937E8a29b54878018B396A23b4BdE
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 506957246931479758
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2271197356497689573
Attaching ballot to address 0xECd44b59b2B937E8a29b54878018B396A23b4BdE
Getting voting power to address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa
Account 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa vote power is 0
Getting voting power to address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D
Account 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D vote power is 0
0
```

</details>

<details>
    <summary>CastVotes</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/CastVotes.ts 0xECd44b59b2B937E8a29b54878018B396A23b4BdE
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 506957246931479758
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2271197356497689573
Attaching ballot to address 0xECd44b59b2B937E8a29b54878018B396A23b4BdE
Voting
<ref *1> Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (error={"reason":"execution reverted: Voting power smaller than amount","code":"UNPREDICTABLE_GAS_LIMIT","method":"estimateGas","transaction":{"from":"0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D","maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x59682f0e"},"to":"0xECd44b59b2B937E8a29b54878018B396A23b4BdE","data":"0xb384abef00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002","type":2,"accessList":null},"error":{"reason":"processing response error","code":"SERVER_ERROR","body":"{\"jsonrpc\":\"2.0\",\"id\":46,\"error\":{\"code\":3,\"data\":\"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74\",\"message\":\"execution reverted: Voting power smaller than amount\"}}","error":{"code":3,"data":"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74"},"requestBody":"{\"method\":\"eth_estimateGas\",\"params\":[{\"type\":\"0x2\",\"maxFeePerGas\":\"0x59682f0e\",\"maxPriorityFeePerGas\":\"0x59682f00\",\"from\":\"0xfc289231534c6f14efd0f2496550aa6cbfcf612d\",\"to\":\"0xecd44b59b2b937e8a29b54878018b396a23b4bde\",\"data\":\"0xb384abef00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002\"}],\"id\":46,\"jsonrpc\":\"2.0\"}","requestMethod":"POST","url":"https://sepolia.infura.io/v3/952510520d3947c99e9a81768e8db375"}}, tx={"data":"0xb384abef00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002","to":{},"from":"0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D","type":2,"maxFeePerGas":{"type":"BigNumber","hex":"0x59682f0e"},"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"nonce":{},"gasLimit":{},"chainId":{}}, code=UNPREDICTABLE_GAS_LIMIT, version=abstract-signer/5.7.0)
    at Logger.makeError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at /Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/abstract-signer/src.ts/index.ts:301:31
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Promise.all (index 7) {
  reason: 'cannot estimate gas; transaction may fail or may require manual gas limit',
  code: 'UNPREDICTABLE_GAS_LIMIT',
  error: Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (reason="execution reverted: Voting power smaller than amount", method="estimateGas", transaction={"from":"0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D","maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x59682f0e"},"to":"0xECd44b59b2B937E8a29b54878018B396A23b4BdE","data":"0xb384abef00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002","type":2,"accessList":null}, error={"reason":"processing response error","code":"SERVER_ERROR","body":"{\"jsonrpc\":\"2.0\",\"id\":46,\"error\":{\"code\":3,\"data\":\"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74\",\"message\":\"execution reverted: Voting power smaller than amount\"}}","error":{"code":3,"data":"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74"},"requestBody":"{\"method\":\"eth_estimateGas\",\"params\":[{\"type\":\"0x2\",\"maxFeePerGas\":\"0x59682f0e\",\"maxPriorityFeePerGas\":\"0x59682f00\",\"from\":\"0xfc289231534c6f14efd0f2496550aa6cbfcf612d\",\"to\":\"0xecd44b59b2b937e8a29b54878018b396a23b4bde\",\"data\":\"0xb384abef00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002\"}],\"id\":46,\"jsonrpc\":\"2.0\"}","requestMethod":"POST","url":"https://sepolia.infura.io/v3/952510520d3947c99e9a81768e8db375"}, code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.7.2)
      at Logger.makeError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
      at Logger.throwError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
      at checkError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:78:20)
      at InfuraProvider.<anonymous> (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:642:20)
      at step (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:48:23)
      at Object.throw (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:29:53)
      at rejected (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:21:65)
      at processTicksAndRejections (node:internal/process/task_queues:95:5) {
    reason: 'execution reverted: Voting power smaller than amount',
    code: 'UNPREDICTABLE_GAS_LIMIT',
    method: 'estimateGas',
    transaction: {
      from: '0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D',
      maxPriorityFeePerGas: [BigNumber],
      maxFeePerGas: [BigNumber],
      to: '0xECd44b59b2B937E8a29b54878018B396A23b4BdE',
      data: '0xb384abef00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002',
      type: 2,
      accessList: null
    },
    error: Error: processing response error (body="{\"jsonrpc\":\"2.0\",\"id\":46,\"error\":{\"code\":3,\"data\":\"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74\",\"message\":\"execution reverted: Voting power smaller than amount\"}}", error={"code":3,"data":"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74"}, requestBody="{\"method\":\"eth_estimateGas\",\"params\":[{\"type\":\"0x2\",\"maxFeePerGas\":\"0x59682f0e\",\"maxPriorityFeePerGas\":\"0x59682f00\",\"from\":\"0xfc289231534c6f14efd0f2496550aa6cbfcf612d\",\"to\":\"0xecd44b59b2b937e8a29b54878018b396a23b4bde\",\"data\":\"0xb384abef00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002\"}],\"id\":46,\"jsonrpc\":\"2.0\"}", requestMethod="POST", url="https://sepolia.infura.io/v3/952510520d3947c99e9a81768e8db375", code=SERVER_ERROR, version=web/5.7.1)
        at Logger.makeError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
        at Logger.throwError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
        at /Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/src.ts/index.ts:341:28
        at step (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/lib/index.js:33:23)
        at Object.next (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/lib/index.js:14:53)
        at fulfilled (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/lib/index.js:5:58)
        at processTicksAndRejections (node:internal/process/task_queues:95:5) {
      reason: 'processing response error',
      code: 'SERVER_ERROR',
      body: '{"jsonrpc":"2.0","id":46,"error":{"code":3,"data":"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74","message":"execution reverted: Voting power smaller than amount"}}',
      error: [Error],
      requestBody: '{"method":"eth_estimateGas","params":[{"type":"0x2","maxFeePerGas":"0x59682f0e","maxPriorityFeePerGas":"0x59682f00","from":"0xfc289231534c6f14efd0f2496550aa6cbfcf612d","to":"0xecd44b59b2b937e8a29b54878018b396a23b4bde","data":"0xb384abef00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002"}],"id":46,"jsonrpc":"2.0"}',
      requestMethod: 'POST',
      url: 'https://sepolia.infura.io/v3/952510520d3947c99e9a81768e8db375'
    }
  },
  tx: {
    data: '0xb384abef00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002',
    to: Promise { '0xECd44b59b2B937E8a29b54878018B396A23b4BdE' },
    from: '0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D',
    type: 2,
    maxFeePerGas: BigNumber { _hex: '0x59682f0e', _isBigNumber: true },
    maxPriorityFeePerGas: BigNumber { _hex: '0x59682f00', _isBigNumber: true },
    nonce: Promise { 4 },
    gasLimit: Promise { <rejected> [Circular *1] },
    chainId: Promise { 11155111 }
  }
}
```

</details>

<details>
    <summary>QueryResults</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/QueryResults.ts 0xECd44b59b2B937E8a29b54878018B396A23b4BdE
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 503185690413879161
Attaching ballot to address 0xECd44b59b2B937E8a29b54878018B396A23b4BdE
Error: call revert exception; VM Exception while processing transaction: reverted with reason string "Zero votes for all proposals" [ See: https://links.ethers.org/v5-errors-CALL_EXCEPTION ] (method="winningProposal()", data="0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001c5a65726f20766f74657320666f7220616c6c2070726f706f73616c7300000000", errorArgs=["Zero votes for all proposals"], errorName="Error", errorSignature="Error(string)", reason="Zero votes for all proposals", code=CALL_EXCEPTION, version=abi/5.7.0)
    at Logger.makeError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at Interface.decodeFunctionResult (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/abi/src.ts/interface.ts:427:23)
    at Contract.<anonymous> (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/contracts/src.ts/index.ts:400:44)
    at step (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/contracts/lib/index.js:48:23)
    at Object.next (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/contracts/lib/index.js:29:53)
    at fulfilled (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/contracts/lib/index.js:20:58)
    at processTicksAndRejections (node:internal/process/task_queues:95:5) {
  reason: 'Zero votes for all proposals',
  code: 'CALL_EXCEPTION',
  method: 'winningProposal()',
  data: '0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001c5a65726f20766f74657320666f7220616c6c2070726f706f73616c7300000000',
  errorArgs: [ 'Zero votes for all proposals' ],
  errorName: 'Error',
  errorSignature: 'Error(string)',
  address: '0xECd44b59b2B937E8a29b54878018B396A23b4BdE',
  args: [],
  transaction: {
    data: '0x609ff1bd',
    to: '0xECd44b59b2B937E8a29b54878018B396A23b4BdE',
    from: '0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa'
  }
}
```

</details>

### After Mints / Before Delegates - Block 3029651

* address: [0x6fdd2BD9B6681d634c33749E89643Fb3f9613Faf](https://sepolia.etherscan.io/address/0x6fdd2BD9B6681d634c33749E89643Fb3f9613Faf)
* block: 3030945

<details>
    <summary>TokenizedBallotDeployment</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/TokenizedBallotDeployment.ts 0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2 3029651 ONE TWO THREE
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 506957246931479758
Proposals:
Proposal N. 1: ONE
Proposal N. 2: TWO
Proposal N. 3: THREE
Deploying Tokenized Ballot contract, aiming vote power state in block 3029651
Awaiting confirmation
Contract deployed, address 0x6fdd2BD9B6681d634c33749E89643Fb3f9613Faf, block number 3030945
```

</details>

<details>
    <summary>CheckVotePower</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/CheckVotePower.ts 0x6fdd2BD9B6681d634c33749E89643Fb3f9613Faf
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 505733281425767919
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2271197356497689573
Attaching ballot to address 0x6fdd2BD9B6681d634c33749E89643Fb3f9613Faf
Getting voting power to address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa
Account 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa vote power is 0
Getting voting power to address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D
Account 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D vote power is 0
```

</details>

<details>
    <summary>CastVotes</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/CastVotes.ts 0x6fdd2BD9B6681d634c33749E89643Fb3f9613Faf
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 505733281425767919
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2271197356497689573
Attaching ballot to address 0x6fdd2BD9B6681d634c33749E89643Fb3f9613Faf
Voting
<ref *1> Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (error={"reason":"execution reverted: Voting power smaller than amount","code":"UNPREDICTABLE_GAS_LIMIT","method":"estimateGas","transaction":{"from":"0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D","maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x59682f0e"},"to":"0x6fdd2BD9B6681d634c33749E89643Fb3f9613Faf","data":"0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006","type":2,"accessList":null},"error":{"reason":"processing response error","code":"SERVER_ERROR","body":"{\"jsonrpc\":\"2.0\",\"id\":46,\"error\":{\"code\":3,\"data\":\"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74\",\"message\":\"execution reverted: Voting power smaller than amount\"}}","error":{"code":3,"data":"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74"},"requestBody":"{\"method\":\"eth_estimateGas\",\"params\":[{\"type\":\"0x2\",\"maxFeePerGas\":\"0x59682f0e\",\"maxPriorityFeePerGas\":\"0x59682f00\",\"from\":\"0xfc289231534c6f14efd0f2496550aa6cbfcf612d\",\"to\":\"0x6fdd2bd9b6681d634c33749e89643fb3f9613faf\",\"data\":\"0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006\"}],\"id\":46,\"jsonrpc\":\"2.0\"}","requestMethod":"POST","url":"https://sepolia.infura.io/v3/952510520d3947c99e9a81768e8db375"}}, tx={"data":"0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006","to":{},"from":"0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D","type":2,"maxFeePerGas":{"type":"BigNumber","hex":"0x59682f0e"},"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"nonce":{},"gasLimit":{},"chainId":{}}, code=UNPREDICTABLE_GAS_LIMIT, version=abstract-signer/5.7.0)
    at Logger.makeError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at /Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/abstract-signer/src.ts/index.ts:301:31
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Promise.all (index 7) {
  reason: 'cannot estimate gas; transaction may fail or may require manual gas limit',
  code: 'UNPREDICTABLE_GAS_LIMIT',
  error: Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (reason="execution reverted: Voting power smaller than amount", method="estimateGas", transaction={"from":"0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D","maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x59682f0e"},"to":"0x6fdd2BD9B6681d634c33749E89643Fb3f9613Faf","data":"0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006","type":2,"accessList":null}, error={"reason":"processing response error","code":"SERVER_ERROR","body":"{\"jsonrpc\":\"2.0\",\"id\":46,\"error\":{\"code\":3,\"data\":\"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74\",\"message\":\"execution reverted: Voting power smaller than amount\"}}","error":{"code":3,"data":"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74"},"requestBody":"{\"method\":\"eth_estimateGas\",\"params\":[{\"type\":\"0x2\",\"maxFeePerGas\":\"0x59682f0e\",\"maxPriorityFeePerGas\":\"0x59682f00\",\"from\":\"0xfc289231534c6f14efd0f2496550aa6cbfcf612d\",\"to\":\"0x6fdd2bd9b6681d634c33749e89643fb3f9613faf\",\"data\":\"0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006\"}],\"id\":46,\"jsonrpc\":\"2.0\"}","requestMethod":"POST","url":"https://sepolia.infura.io/v3/952510520d3947c99e9a81768e8db375"}, code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.7.2)
      at Logger.makeError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
      at Logger.throwError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
      at checkError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:78:20)
      at InfuraProvider.<anonymous> (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:642:20)
      at step (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:48:23)
      at Object.throw (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:29:53)
      at rejected (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:21:65)
      at processTicksAndRejections (node:internal/process/task_queues:95:5) {
    reason: 'execution reverted: Voting power smaller than amount',
    code: 'UNPREDICTABLE_GAS_LIMIT',
    method: 'estimateGas',
    transaction: {
      from: '0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D',
      maxPriorityFeePerGas: [BigNumber],
      maxFeePerGas: [BigNumber],
      to: '0x6fdd2BD9B6681d634c33749E89643Fb3f9613Faf',
      data: '0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006',
      type: 2,
      accessList: null
    },
    error: Error: processing response error (body="{\"jsonrpc\":\"2.0\",\"id\":46,\"error\":{\"code\":3,\"data\":\"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74\",\"message\":\"execution reverted: Voting power smaller than amount\"}}", error={"code":3,"data":"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74"}, requestBody="{\"method\":\"eth_estimateGas\",\"params\":[{\"type\":\"0x2\",\"maxFeePerGas\":\"0x59682f0e\",\"maxPriorityFeePerGas\":\"0x59682f00\",\"from\":\"0xfc289231534c6f14efd0f2496550aa6cbfcf612d\",\"to\":\"0x6fdd2bd9b6681d634c33749e89643fb3f9613faf\",\"data\":\"0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006\"}],\"id\":46,\"jsonrpc\":\"2.0\"}", requestMethod="POST", url="https://sepolia.infura.io/v3/952510520d3947c99e9a81768e8db375", code=SERVER_ERROR, version=web/5.7.1)
        at Logger.makeError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
        at Logger.throwError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
        at /Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/src.ts/index.ts:341:28
        at step (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/lib/index.js:33:23)
        at Object.next (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/lib/index.js:14:53)
        at fulfilled (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/lib/index.js:5:58)
        at processTicksAndRejections (node:internal/process/task_queues:95:5) {
      reason: 'processing response error',
      code: 'SERVER_ERROR',
      body: '{"jsonrpc":"2.0","id":46,"error":{"code":3,"data":"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74","message":"execution reverted: Voting power smaller than amount"}}',
      error: [Error],
      requestBody: '{"method":"eth_estimateGas","params":[{"type":"0x2","maxFeePerGas":"0x59682f0e","maxPriorityFeePerGas":"0x59682f00","from":"0xfc289231534c6f14efd0f2496550aa6cbfcf612d","to":"0x6fdd2bd9b6681d634c33749e89643fb3f9613faf","data":"0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006"}],"id":46,"jsonrpc":"2.0"}',
      requestMethod: 'POST',
      url: 'https://sepolia.infura.io/v3/952510520d3947c99e9a81768e8db375'
    }
  },
  tx: {
    data: '0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006',
    to: Promise { '0x6fdd2BD9B6681d634c33749E89643Fb3f9613Faf' },
    from: '0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D',
    type: 2,
    maxFeePerGas: BigNumber { _hex: '0x59682f0e', _isBigNumber: true },
    maxPriorityFeePerGas: BigNumber { _hex: '0x59682f00', _isBigNumber: true },
    nonce: Promise { 4 },
    gasLimit: Promise { <rejected> [Circular *1] },
    chainId: Promise { 11155111 }
  }
}
```

</details>

<details>
    <summary>QueryResults</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/QueryResults.ts 0x6fdd2BD9B6681d634c33749E89643Fb3f9613Faf
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 503185690413879161
Attaching ballot to address 0x6fdd2BD9B6681d634c33749E89643Fb3f9613Faf
Error: call revert exception; VM Exception while processing transaction: reverted with reason string "Zero votes for all proposals" [ See: https://links.ethers.org/v5-errors-CALL_EXCEPTION ] (method="winningProposal()", data="0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001c5a65726f20766f74657320666f7220616c6c2070726f706f73616c7300000000", errorArgs=["Zero votes for all proposals"], errorName="Error", errorSignature="Error(string)", reason="Zero votes for all proposals", code=CALL_EXCEPTION, version=abi/5.7.0)
    at Logger.makeError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at Interface.decodeFunctionResult (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/abi/src.ts/interface.ts:427:23)
    at Contract.<anonymous> (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/contracts/src.ts/index.ts:400:44)
    at step (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/contracts/lib/index.js:48:23)
    at Object.next (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/contracts/lib/index.js:29:53)
    at fulfilled (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/contracts/lib/index.js:20:58)
    at processTicksAndRejections (node:internal/process/task_queues:95:5) {
  reason: 'Zero votes for all proposals',
  code: 'CALL_EXCEPTION',
  method: 'winningProposal()',
  data: '0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001c5a65726f20766f74657320666f7220616c6c2070726f706f73616c7300000000',
  errorArgs: [ 'Zero votes for all proposals' ],
  errorName: 'Error',
  errorSignature: 'Error(string)',
  address: '0x6fdd2BD9B6681d634c33749E89643Fb3f9613Faf',
  args: [],
  transaction: {
    data: '0x609ff1bd',
    to: '0x6fdd2BD9B6681d634c33749E89643Fb3f9613Faf',
    from: '0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa'
  }
}
```

</details>

### After Mints / After 1 Delegate - Block 3029652

* address: [0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8](https://sepolia.etherscan.io/address/0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8)
* block: 3030955

<details>
    <summary>TokenizedBallotDeployment</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/TokenizedBallotDeployment.ts 0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2 3029652 ONE TWO THREE
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 505733281425767919
Proposals:
Proposal N. 1: ONE
Proposal N. 2: TWO
Proposal N. 3: THREE
Deploying Tokenized Ballot contract, aiming vote power state in block 3029652
Awaiting confirmation
Contract deployed, address 0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8, block number 3030955
```

</details>

<details>
    <summary>CheckVotePower</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/CheckVotePower.ts 0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 504509315920056080
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2271197356497689573
Attaching ballot to address 0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8
Getting voting power to address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa
Account 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa vote power is 0
Getting voting power to address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D
Account 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D vote power is 300
```

</details>

<details>
    <summary>CastVotes</summary>

[Tx 0x71c986466608d8471b538cf835c6c8421676656c4725373ad111b1d068682a8a](https://sepolia.etherscan.io/tx/0x71c986466608d8471b538cf835c6c8421676656c4725373ad111b1d068682a8a)
```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/CastVotes.ts 0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 504509315920056080
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2271197356497689573
Attaching ballot to address 0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8
Voting
Address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D voted 23 for proposal 1, tx 0x71c986466608d8471b538cf835c6c8421676656c4725373ad111b1d068682a8a, block number 3030974
Attaching ballot to address 0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8
Voting
<ref *1> Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (error={"reason":"execution reverted: Voting power smaller than amount","code":"UNPREDICTABLE_GAS_LIMIT","method":"estimateGas","transaction":{"from":"0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa","maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x59682f0e"},"to":"0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8","data":"0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016","type":2,"accessList":null},"error":{"reason":"processing response error","code":"SERVER_ERROR","body":"{\"jsonrpc\":\"2.0\",\"id\":46,\"error\":{\"code\":3,\"data\":\"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74\",\"message\":\"execution reverted: Voting power smaller than amount\"}}","error":{"code":3,"data":"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74"},"requestBody":"{\"method\":\"eth_estimateGas\",\"params\":[{\"type\":\"0x2\",\"maxFeePerGas\":\"0x59682f0e\",\"maxPriorityFeePerGas\":\"0x59682f00\",\"from\":\"0xc29eb9a48c8a69273d99d52b4279084ae8ad8dfa\",\"to\":\"0xb6aa3da7043bc5b583de37082e10a6952f45a5b8\",\"data\":\"0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016\"}],\"id\":46,\"jsonrpc\":\"2.0\"}","requestMethod":"POST","url":"https://sepolia.infura.io/v3/952510520d3947c99e9a81768e8db375"}}, tx={"data":"0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016","to":{},"from":"0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa","type":2,"maxFeePerGas":{"type":"BigNumber","hex":"0x59682f0e"},"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"nonce":{},"gasLimit":{},"chainId":{}}, code=UNPREDICTABLE_GAS_LIMIT, version=abstract-signer/5.7.0)
    at Logger.makeError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at /Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/abstract-signer/src.ts/index.ts:301:31
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Promise.all (index 7) {
  reason: 'cannot estimate gas; transaction may fail or may require manual gas limit',
  code: 'UNPREDICTABLE_GAS_LIMIT',
  error: Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (reason="execution reverted: Voting power smaller than amount", method="estimateGas", transaction={"from":"0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa","maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x59682f0e"},"to":"0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8","data":"0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016","type":2,"accessList":null}, error={"reason":"processing response error","code":"SERVER_ERROR","body":"{\"jsonrpc\":\"2.0\",\"id\":46,\"error\":{\"code\":3,\"data\":\"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74\",\"message\":\"execution reverted: Voting power smaller than amount\"}}","error":{"code":3,"data":"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74"},"requestBody":"{\"method\":\"eth_estimateGas\",\"params\":[{\"type\":\"0x2\",\"maxFeePerGas\":\"0x59682f0e\",\"maxPriorityFeePerGas\":\"0x59682f00\",\"from\":\"0xc29eb9a48c8a69273d99d52b4279084ae8ad8dfa\",\"to\":\"0xb6aa3da7043bc5b583de37082e10a6952f45a5b8\",\"data\":\"0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016\"}],\"id\":46,\"jsonrpc\":\"2.0\"}","requestMethod":"POST","url":"https://sepolia.infura.io/v3/952510520d3947c99e9a81768e8db375"}, code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.7.2)
      at Logger.makeError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
      at Logger.throwError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
      at checkError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:78:20)
      at InfuraProvider.<anonymous> (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:642:20)
      at step (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:48:23)
      at Object.throw (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:29:53)
      at rejected (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:21:65)
      at processTicksAndRejections (node:internal/process/task_queues:95:5) {
    reason: 'execution reverted: Voting power smaller than amount',
    code: 'UNPREDICTABLE_GAS_LIMIT',
    method: 'estimateGas',
    transaction: {
      from: '0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa',
      maxPriorityFeePerGas: [BigNumber],
      maxFeePerGas: [BigNumber],
      to: '0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8',
      data: '0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016',
      type: 2,
      accessList: null
    },
    error: Error: processing response error (body="{\"jsonrpc\":\"2.0\",\"id\":46,\"error\":{\"code\":3,\"data\":\"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74\",\"message\":\"execution reverted: Voting power smaller than amount\"}}", error={"code":3,"data":"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74"}, requestBody="{\"method\":\"eth_estimateGas\",\"params\":[{\"type\":\"0x2\",\"maxFeePerGas\":\"0x59682f0e\",\"maxPriorityFeePerGas\":\"0x59682f00\",\"from\":\"0xc29eb9a48c8a69273d99d52b4279084ae8ad8dfa\",\"to\":\"0xb6aa3da7043bc5b583de37082e10a6952f45a5b8\",\"data\":\"0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016\"}],\"id\":46,\"jsonrpc\":\"2.0\"}", requestMethod="POST", url="https://sepolia.infura.io/v3/952510520d3947c99e9a81768e8db375", code=SERVER_ERROR, version=web/5.7.1)
        at Logger.makeError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
        at Logger.throwError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
        at /Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/src.ts/index.ts:341:28
        at step (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/lib/index.js:33:23)
        at Object.next (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/lib/index.js:14:53)
        at fulfilled (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/web/lib/index.js:5:58)
        at processTicksAndRejections (node:internal/process/task_queues:95:5) {
      reason: 'processing response error',
      code: 'SERVER_ERROR',
      body: '{"jsonrpc":"2.0","id":46,"error":{"code":3,"data":"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020566f74696e6720706f77657220736d616c6c6572207468616e20616d6f756e74","message":"execution reverted: Voting power smaller than amount"}}',
      error: [Error],
      requestBody: '{"method":"eth_estimateGas","params":[{"type":"0x2","maxFeePerGas":"0x59682f0e","maxPriorityFeePerGas":"0x59682f00","from":"0xc29eb9a48c8a69273d99d52b4279084ae8ad8dfa","to":"0xb6aa3da7043bc5b583de37082e10a6952f45a5b8","data":"0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016"}],"id":46,"jsonrpc":"2.0"}',
      requestMethod: 'POST',
      url: 'https://sepolia.infura.io/v3/952510520d3947c99e9a81768e8db375'
    }
  },
  tx: {
    data: '0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016',
    to: Promise { '0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8' },
    from: '0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa',
    type: 2,
    maxFeePerGas: BigNumber { _hex: '0x59682f0e', _isBigNumber: true },
    maxPriorityFeePerGas: BigNumber { _hex: '0x59682f00', _isBigNumber: true },
    nonce: Promise { 20 },
    gasLimit: Promise { <rejected> [Circular *1] },
    chainId: Promise { 11155111 }
  }
}
```

</details>

<details>
    <summary>CheckVotePower</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/CheckVotePower.ts 0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 504509315920056080
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2271072028497104709
Attaching ballot to address 0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8
Getting voting power to address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa
Account 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa vote power is 0
Getting voting power to address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D
Account 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D vote power is 277
```

</details>

<details>
    <summary>QueryResults</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/QueryResults.ts 0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 503185690413879161
Attaching ballot to address 0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8
Proposal TWO, index 1, winning with 23 votes
```

</details>

### After Delegates - Block 3029653

* address: [0xc33e80202325d8264f427b248DD2704d48d0Fc3F](https://sepolia.etherscan.io/address/0xc33e80202325d8264f427b248DD2704d48d0Fc3F)
* block: 3030985

<details>
    <summary>TokenizedBallotDeployment</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/TokenizedBallotDeployment.ts 0xdccA0572Ac7BF14576Cf5d5e8E7Cf31450157Fa2 3029653 ONE TWO THREE
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 504509315920056080
Proposals:
Proposal N. 1: ONE
Proposal N. 2: TWO
Proposal N. 3: THREE
Deploying Tokenized Ballot contract, aiming vote power state in block 3029653
Awaiting confirmation
Contract deployed, address 0xc33e80202325d8264f427b248DD2704d48d0Fc3F, block number 3030985
```

</details>

<details>
    <summary>CheckVotePower</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/CheckVotePower.ts 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 503285350414344241
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2271072028497104709
Attaching ballot to address 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Getting voting power to address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa
Account 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa vote power is 100
Getting voting power to address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D
Account 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D vote power is 300
```

</details>

<details>
    <summary>CastVotes</summary>

[Tx 0x31c769879f86e2f353f6a061c40055869a0fc8d9936b13f65f042ed1e983634b](https://sepolia.etherscan.io/tx/0x31c769879f86e2f353f6a061c40055869a0fc8d9936b13f65f042ed1e983634b)
[Tx 0xd9dd53c7a188478cbdaecf1de20f7eda32c314d94c80ef1512dc183fc7ca9728](https://sepolia.etherscan.io/tx/0xd9dd53c7a188478cbdaecf1de20f7eda32c314d94c80ef1512dc183fc7ca9728)
```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/CastVotes.ts 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 503285350414344241
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2271072028497104709
Attaching ballot to address 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Voting
Address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D voted 11 for proposal 0, tx 0x31c769879f86e2f353f6a061c40055869a0fc8d9936b13f65f042ed1e983634b, block number 3031000
Attaching ballot to address 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Voting
Address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa voted 6 for proposal 0, tx 0xd9dd53c7a188478cbdaecf1de20f7eda32c314d94c80ef1512dc183fc7ca9728, block number 3031001
```

</details>

<details>
    <summary>CheckVotePower</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/CheckVotePower.ts 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 503185690413879161
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2270946718496519929
Attaching ballot to address 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Getting voting power to address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa
Account 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa vote power is 94
Getting voting power to address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D
Account 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D vote power is 289
```

</details>

<details>
    <summary>QueryResults</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/QueryResults.ts 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 503185690413879161
Attaching ballot to address 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Proposal ONE, index 0, winning with 17 votes
```

</details>

<details>
    <summary>CastVotes</summary>

[Tx 0x852f5d8d44fe9cbc412e17466cd5d6de8a2b8144e2cfe6a5205da3f4cbd8a37b](https://sepolia.etherscan.io/tx/0x852f5d8d44fe9cbc412e17466cd5d6de8a2b8144e2cfe6a5205da3f4cbd8a37b)
[Tx 0x0cb504425cefbf787edf8a28533e91aa6f41b447824dcd7b47b373415985768c](https://sepolia.etherscan.io/tx/0x0cb504425cefbf787edf8a28533e91aa6f41b447824dcd7b47b373415985768c)
```bash
➜  weekend-3 git:(main) yarn run ts-node --files scripts/tokenized-ballot/CastVotes.ts 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 503185690413879161
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2270946718496519929
Attaching ballot to address 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Voting
Address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D voted 16 for proposal 1, tx 0x852f5d8d44fe9cbc412e17466cd5d6de8a2b8144e2cfe6a5205da3f4cbd8a37b, block number 3031284
Attaching ballot to address 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Voting
Address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa voted 1 for proposal 1, tx 0x0cb504425cefbf787edf8a28533e91aa6f41b447824dcd7b47b373415985768c, block number 3031285
```

</details>

<details>
    <summary>CheckVotePower</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/CheckVotePower.ts 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 503111662413533697
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2270847040496054765
Attaching ballot to address 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Getting voting power to address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa
Account 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa vote power is 93
Getting voting power to address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D
Account 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D vote power is 273
```

</details>

<details>
    <summary>QueryResults - Error, Proposals Tied</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/QueryResults.ts 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 503111662413533697
Attaching ballot to address 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Error: call revert exception; VM Exception while processing transaction: reverted with reason string "There are proposals tied with most votes" [ See: https://links.ethers.org/v5-errors-CALL_EXCEPTION ] (method="winningProposal()", data="0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000285468657265206172652070726f706f73616c7320746965642077697468206d6f737420766f746573000000000000000000000000000000000000000000000000", errorArgs=["There are proposals tied with most votes"], errorName="Error", errorSignature="Error(string)", reason="There are proposals tied with most votes", code=CALL_EXCEPTION, version=abi/5.7.0)
    at Logger.makeError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at Interface.decodeFunctionResult (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/abi/src.ts/interface.ts:427:23)
    at Contract.<anonymous> (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/contracts/src.ts/index.ts:400:44)
    at step (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/contracts/lib/index.js:48:23)
    at Object.next (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/contracts/lib/index.js:29:53)
    at fulfilled (/Users/luiscarvalho/personal/encode-bc/projects/encode-2023-late/weekend-3/node_modules/@ethersproject/contracts/lib/index.js:20:58)
    at processTicksAndRejections (node:internal/process/task_queues:95:5) {
  reason: 'There are proposals tied with most votes',
  code: 'CALL_EXCEPTION',
  method: 'winningProposal()',
  data: '0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000285468657265206172652070726f706f73616c7320746965642077697468206d6f737420766f746573000000000000000000000000000000000000000000000000',
  errorArgs: [ 'There are proposals tied with most votes' ],
  errorName: 'Error',
  errorSignature: 'Error(string)',
  address: '0xc33e80202325d8264f427b248DD2704d48d0Fc3F',
  args: [],
  transaction: {
    data: '0x609ff1bd',
    to: '0xc33e80202325d8264f427b248DD2704d48d0Fc3F',
    from: '0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa'
  }
}
```

</details>

<details>
    <summary>CastVotes</summary>

[Tx 0x2d82322aeda2f15d02ef219c355c21a02be6f030b175b004f1109b277cc3728b](https://sepolia.etherscan.io/tx/0x2d82322aeda2f15d02ef219c355c21a02be6f030b175b004f1109b277cc3728b)
[Tx 0x90d63d0db98a7240321a63c638fe31b973bc7f3a39b592c2b6276de23dfd004d](https://sepolia.etherscan.io/tx/0x90d63d0db98a7240321a63c638fe31b973bc7f3a39b592c2b6276de23dfd004d)
```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/CastVotes.ts 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 503111662413533697
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2270847040496054765
Attaching ballot to address 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Voting
Address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D voted 24 for proposal 0, tx 0x2d82322aeda2f15d02ef219c355c21a02be6f030b175b004f1109b277cc3728b, block number 3031297
Attaching ballot to address 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Voting
Address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa voted 3 for proposal 1, tx 0x90d63d0db98a7240321a63c638fe31b973bc7f3a39b592c2b6276de23dfd004d, block number 3031298
```

</details>

<details>
    <summary>CheckVotePower</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/CheckVotePower.ts 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 503037634413188233
Using Infura provider on sepolia network
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 2270773030495709385
Attaching ballot to address 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Getting voting power to address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa
Account 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa vote power is 90
Getting voting power to address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D
Account 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D vote power is 249
```

</details>

<details>
    <summary>QueryResults</summary>

```bash
➜  weekend-3 git:(main) ✗ yarn run ts-node --files scripts/tokenized-ballot/QueryResults.ts 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Using Infura provider on sepolia network
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 503037634413188233
Attaching ballot to address 0xc33e80202325d8264f427b248DD2704d48d0Fc3F
Proposal ONE, index 0, winning with 41 votes
```

</details>
