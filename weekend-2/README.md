# Ballot Project

* Signer 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa

## Deployment

* Contract address: 0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8
* [Creation Transaction](https://goerli.etherscan.io/tx/0xe968232643a12a288b4901d9d132e30f4ecfcd82f33c68ff6186da41ea7b0eb6)
* Creation Logs
```bash
[➜  project-08 git:(master) ✗ yarn run ts-node --files scripts/Deployment.ts "Proposal1" "Proposal2" "Proposal3"
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 564455830036521693
Proposals: 
Proposal N. 1: Proposal1
Proposal N. 2: Proposal2
Proposal N. 3: Proposal3
Deploying contract
========= NOTICE =========
Request-Rate Exceeded  (this message will not be repeated)

The default API keys for each service are provided as a highly-throttled,
community resource for low-traffic projects and early prototyping.

While your application will continue to function, we highly recommended
signing up for your own API keys to improve performance, increase your
request rate/limit and enable other perks, such as metrics and advanced APIs.

For more details: https://docs.ethers.io/api-keys/
==========================
Awaiting confirmation
Contract deployed, address 0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8, block number 8563223

```

## Give Right to Vote

* Example
```bash
yarn run ts-node --files scripts/GiveRightToVote.ts "0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8" "0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D"
```

* Erro log
```bash
[➜  project-08 git:(master) ✗ yarn run ts-node --files scripts/GiveRightToVote.ts
Error: Missing contract address and/or contract to give right to vote
    at validateInputDataValues (/Users/luiscarvalho/personal/encode-bc/project-08/scripts/GiveRightToVote.ts:43:15)
    at extractInputData (/Users/luiscarvalho/personal/encode-bc/project-08/scripts/GiveRightToVote.ts:32:5)
    at main (/Users/luiscarvalho/personal/encode-bc/project-08/scripts/GiveRightToVote.ts:20:34)
    at Object.<anonymous> (/Users/luiscarvalho/personal/encode-bc/project-08/scripts/GiveRightToVote.ts:7:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module.m._compile (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/ts-node/src/index.ts:1618:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Object.require.extensions.<computed> [as .ts] (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Function.Module._load (node:internal/modules/cjs/loader:958:12)
```

* [Success Transation](https://goerli.etherscan.io/tx/0xb364bd6eda4d22af8cab4af09d243c5872fb854c03c89b190daa4bbe25d8a784)
```bash
[➜  project-08 git:(master) ✗ yarn run ts-node --files scripts/GiveRightToVote.ts "0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8" "0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D"

========= NOTICE =========
Request-Rate Exceeded  (this message will not be repeated)

The default API keys for each service are provided as a highly-throttled,
community resource for low-traffic projects and early prototyping.

While your application will continue to function, we highly recommended
signing up for your own API keys to improve performance, increase your
request rate/limit and enable other perks, such as metrics and advanced APIs.

For more details: https://docs.ethers.io/api-keys/
==========================
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 562763308002671253
Attaching ballot to address 0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8
Giving right to vote to 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D
Awaiting confirmation
Given right to vote to 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D in transaction 0xb364bd6eda4d22af8cab4af09d243c5872fb854c03c89b190daa4bbe25d8a784
```

## Delegate

* Example
```bash
yarn run ts-node --files scripts/Delegate.ts "0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8" "0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D"
```

* Erro log
```bash
[➜  project-08 git:(master) ✗ yarn run ts-node --files scripts/Delegate.ts
Error: Missing contract address and/or contract to delegate vote to
    at validateInputDataValues (/Users/luiscarvalho/personal/encode-bc/project-08/scripts/Delegate.ts:33:15)
    at extractInputData (/Users/luiscarvalho/personal/encode-bc/project-08/scripts/Delegate.ts:26:5)
    at main (/Users/luiscarvalho/personal/encode-bc/project-08/scripts/Delegate.ts:14:33)
    at Object.<anonymous> (/Users/luiscarvalho/personal/encode-bc/project-08/scripts/Delegate.ts:6:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module.m._compile (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/ts-node/src/index.ts:1618:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Object.require.extensions.<computed> [as .ts] (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Function.Module._load (node:internal/modules/cjs/loader:958:12)
```

* [Success Transation](https://goerli.etherscan.io/tx/0x642b7f2ae952995fbfa67fc651dcd332f22919fef816e23a4bdf718cda733242)
```bash
[➜  project-08 git:(master) ✗ yarn run ts-node --files scripts/Delegate.ts "0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8" "0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D"
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 562690322501454828
Attaching ballot to address 0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8
Delegating vote to 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D
========= NOTICE =========
Request-Rate Exceeded  (this message will not be repeated)

The default API keys for each service are provided as a highly-throttled,
community resource for low-traffic projects and early prototyping.

While your application will continue to function, we highly recommended
signing up for your own API keys to improve performance, increase your
request rate/limit and enable other perks, such as metrics and advanced APIs.

For more details: https://docs.ethers.io/api-keys/
==========================
Awaiting confirmation
Delegated vote to 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D in transaction 0x642b7f2ae952995fbfa67fc651dcd332f22919fef816e23a4bdf718cda733242
```

## Vote

* Example
```bash
yarn run ts-node --files scripts/Vote.ts "0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8" "1"
```

* Erro log
```bash
[➜  project-08 git:(master) ✗ yarn run ts-node --files scripts/Vote.ts
Error: Missing contract address and/or proposal index
    at validateInputDataValues (/Users/luiscarvalho/personal/encode-bc/project-08/scripts/Vote.ts:33:15)
    at extractInputData (/Users/luiscarvalho/personal/encode-bc/project-08/scripts/Vote.ts:26:5)
    at main (/Users/luiscarvalho/personal/encode-bc/project-08/scripts/Vote.ts:14:33)
    at Object.<anonymous> (/Users/luiscarvalho/personal/encode-bc/project-08/scripts/Vote.ts:6:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module.m._compile (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/ts-node/src/index.ts:1618:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Object.require.extensions.<computed> [as .ts] (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Function.Module._load (node:internal/modules/cjs/loader:958:12)

```
```bash
➜  project-08 git:(master) ✗ yarn run ts-node --files scripts/Vote.ts "0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8" "123"
========= NOTICE =========
Request-Rate Exceeded  (this message will not be repeated)

The default API keys for each service are provided as a highly-throttled,
community resource for low-traffic projects and early prototyping.

While your application will continue to function, we highly recommended
signing up for your own API keys to improve performance, increase your
request rate/limit and enable other perks, such as metrics and advanced APIs.

For more details: https://docs.ethers.io/api-keys/
==========================
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 562607942500026908
Attaching ballot to address 0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8
Voting in proposal 123
/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/logger/src.ts/index.ts:269
        const error: any = new Error(message);
                           ^
<ref *1> Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (error={"reason":"execution reverted: Already voted.","code":"UNPREDICTABLE_GAS_LIMIT","method":"estimateGas","transaction":{"from":"0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa","maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x59682f46"},"to":"0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8","data":"0x0121b93f000000000000000000000000000000000000000000000000000000000000007b","type":2,"accessList":null}}, tx={"data":"0x0121b93f000000000000000000000000000000000000000000000000000000000000007b","to":{},"from":"0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa","type":2,"maxFeePerGas":{"type":"BigNumber","hex":"0x59682f46"},"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"nonce":{},"gasLimit":{},"chainId":{}}, code=UNPREDICTABLE_GAS_LIMIT, version=abstract-signer/5.7.0)
    at Logger.makeError (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at /Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/abstract-signer/src.ts/index.ts:301:31
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Promise.all (index 7) {
  reason: 'cannot estimate gas; transaction may fail or may require manual gas limit',
  code: 'UNPREDICTABLE_GAS_LIMIT',
  error: Error: execution reverted: Already voted. [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (method="estimateGas", transaction={"from":"0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa","maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x59682f46"},"to":"0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8","data":"0x0121b93f000000000000000000000000000000000000000000000000000000000000007b","type":2,"accessList":null}, code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.7.2)
      at Logger.makeError (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
      at Logger.throwError (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
      at /Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/providers/src.ts/fallback-provider.ts:632:24
      at Array.forEach (<anonymous>)
      at /Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/providers/src.ts/fallback-provider.ts:614:33
      at step (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/providers/lib/fallback-provider.js:48:23)
      at Object.next (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/providers/lib/fallback-provider.js:29:53)
      at step (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/providers/lib/fallback-provider.js:33:139)
      at Object.next (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/providers/lib/fallback-provider.js:29:53)
      at fulfilled (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/providers/lib/fallback-provider.js:20:58) {
    reason: 'execution reverted: Already voted.',
    code: 'UNPREDICTABLE_GAS_LIMIT',
    method: 'estimateGas',
    transaction: {
      from: '0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa',
      maxPriorityFeePerGas: [BigNumber],
      maxFeePerGas: [BigNumber],
      to: '0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8',
      data: '0x0121b93f000000000000000000000000000000000000000000000000000000000000007b',
      type: 2,
      accessList: null
    }
  },
  tx: {
    data: '0x0121b93f000000000000000000000000000000000000000000000000000000000000007b',
    to: Promise { '0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8' },
    from: '0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa',
    type: 2,
    maxFeePerGas: BigNumber { _hex: '0x59682f46', _isBigNumber: true },
    maxPriorityFeePerGas: BigNumber { _hex: '0x59682f00', _isBigNumber: true },
    nonce: Promise { 22 },
    gasLimit: Promise { <rejected> [Circular *1] },
    chainId: Promise { 5 }
  }
}

```
```bash
➜  project-08 git:(master) ✗ yarn run ts-node --files scripts/Vote.ts "0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8" "123"
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 198106838242105921
Attaching ballot to address 0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8
Voting in proposal 123
/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/logger/src.ts/index.ts:269
        const error: any = new Error(message);
                           ^
<ref *1> Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (error={"reason":"execution reverted","code":"UNPREDICTABLE_GAS_LIMIT","method":"estimateGas","transaction":{"from":"0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D","maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x59682f58"},"to":"0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8","data":"0x0121b93f000000000000000000000000000000000000000000000000000000000000007b","type":2,"accessList":null}}, tx={"data":"0x0121b93f000000000000000000000000000000000000000000000000000000000000007b","to":{},"from":"0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D","type":2,"maxFeePerGas":{"type":"BigNumber","hex":"0x59682f58"},"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"nonce":{},"gasLimit":{},"chainId":{}}, code=UNPREDICTABLE_GAS_LIMIT, version=abstract-signer/5.7.0)
    at Logger.makeError (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at /Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/abstract-signer/src.ts/index.ts:301:31
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Promise.all (index 7) {
  reason: 'cannot estimate gas; transaction may fail or may require manual gas limit',
  code: 'UNPREDICTABLE_GAS_LIMIT',
  error: Error: execution reverted [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (method="estimateGas", transaction={"from":"0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D","maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x59682f58"},"to":"0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8","data":"0x0121b93f000000000000000000000000000000000000000000000000000000000000007b","type":2,"accessList":null}, code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.7.2)
      at Logger.makeError (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
      at Logger.throwError (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
      at /Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/providers/src.ts/fallback-provider.ts:632:24
      at Array.forEach (<anonymous>)
      at /Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/providers/src.ts/fallback-provider.ts:614:33
      at step (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/providers/lib/fallback-provider.js:48:23)
      at Object.next (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/providers/lib/fallback-provider.js:29:53)
      at step (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/providers/lib/fallback-provider.js:33:139)
      at Object.next (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/providers/lib/fallback-provider.js:29:53)
      at fulfilled (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/@ethersproject/providers/lib/fallback-provider.js:20:58) {
    reason: 'execution reverted',
    code: 'UNPREDICTABLE_GAS_LIMIT',
    method: 'estimateGas',
    transaction: {
      from: '0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D',
      maxPriorityFeePerGas: [BigNumber],
      maxFeePerGas: [BigNumber],
      to: '0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8',
      data: '0x0121b93f000000000000000000000000000000000000000000000000000000000000007b',
      type: 2,
      accessList: null
    }
  },
  tx: {
    data: '0x0121b93f000000000000000000000000000000000000000000000000000000000000007b',
    to: Promise { '0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8' },
    from: '0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D',
    type: 2,
    maxFeePerGas: BigNumber { _hex: '0x59682f58', _isBigNumber: true },
    maxPriorityFeePerGas: BigNumber { _hex: '0x59682f00', _isBigNumber: true },
    nonce: Promise { 8 },
    gasLimit: Promise { <rejected> [Circular *1] },
    chainId: Promise { 5 }
  }
}

```

* [Success Transation](https://goerli.etherscan.io/tx/0xd3662f84ae280022c1bd6d3997d0dc53a97ec0fea399093ba17a2d1322ac3e95)
```bash
[➜  project-08 git:(master) ✗ yarn run ts-node --files scripts/Vote.ts "0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8" "1"  
Signer address 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D, balance 198106838242105921
Attaching ballot to address 0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8
Voting in proposal 1
========= NOTICE =========
Request-Rate Exceeded  (this message will not be repeated)

The default API keys for each service are provided as a highly-throttled,
community resource for low-traffic projects and early prototyping.

While your application will continue to function, we highly recommended
signing up for your own API keys to improve performance, increase your
request rate/limit and enable other perks, such as metrics and advanced APIs.

For more details: https://docs.ethers.io/api-keys/
==========================
Awaiting confirmation
Voted in proposal 1 in transaction 0xd3662f84ae280022c1bd6d3997d0dc53a97ec0fea399093ba17a2d1322ac3e95
```

## Winner Name

* Example
```bash
yarn run ts-node --files scripts/WinnerName.ts "0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8"
```

* Erro log
```bash
[➜  project-08 git:(master) ✗ yarn run ts-node --files scripts/WinnerName.ts
Error: Missing contract address
    at validateInputDataValues (/Users/luiscarvalho/personal/encode-bc/project-08/scripts/WinnerName.ts:34:15)
    at extractInputData (/Users/luiscarvalho/personal/encode-bc/project-08/scripts/WinnerName.ts:27:5)
    at main (/Users/luiscarvalho/personal/encode-bc/project-08/scripts/WinnerName.ts:15:33)
    at Object.<anonymous> (/Users/luiscarvalho/personal/encode-bc/project-08/scripts/WinnerName.ts:7:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module.m._compile (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/ts-node/src/index.ts:1618:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Object.require.extensions.<computed> [as .ts] (/Users/luiscarvalho/personal/encode-bc/project-08/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Function.Module._load (node:internal/modules/cjs/loader:958:12)
```

* Success
```bash
[➜  project-08 git:(master) ✗ yarn run ts-node --files scripts/WinnerName.ts "0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8"
========= NOTICE =========
Request-Rate Exceeded  (this message will not be repeated)

The default API keys for each service are provided as a highly-throttled,
community resource for low-traffic projects and early prototyping.

While your application will continue to function, we highly recommended
signing up for your own API keys to improve performance, increase your
request rate/limit and enable other perks, such as metrics and advanced APIs.

For more details: https://docs.ethers.io/api-keys/
==========================
Signer address 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa, balance 562607942500026908
Attaching ballot to address 0xb6aa3DA7043bc5b583dE37082E10a6952F45a5B8
Getting winner proposal name
Winner proposal is 0x50726f706f73616c320000000000000000000000000000000000000000000000
Winner proposal decoded Proposal2
Getting winner proposal details
Winning proposal index: 1
```