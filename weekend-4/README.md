# Backend for Ballot dApp

## Executing

1. Add Env Variables

To execute, add a `.env` file with the following values:
```
DEPLOYER_MNEMONIC="mnemonic for the deployer wallet"
INFURA_API_KEY="infura key"
MY_TOKEN_CONTRACT_ADDRESS="address for MyToken deployed contract"
NETWORK="goerli/sepolia/etc"
```

2. Download dependencies and start server

```bash
yarn init

yarn start:dev
```

3. [Access Swagger (click here)](http://localhost:3000)
