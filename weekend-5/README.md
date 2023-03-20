# Weekend5

Encode Bootcamp Weekend 5 challenge, Team 1 Late.

Lottery dApp, developed using Angular and EthersJS:
 * First, it is possible to connect using Private Key or Mnemonic Phrase
 * After connected, user has the option to Create a new Lottery, or connect to an existing one via Contract Address
 * Depending on the Lottery Status, and the user Balance, the user see different options:
    * Lottery not initiated:
        * If user is the owner, option to open bets
        * Otherwise, no options
    * Bets open:
        * Buy Tokens, if user balance is 0
        * Approve Lottery Contract to spend tokens, if not done yet
        * Bet, after approval
    * Bets finished
        * Option to close the Lottery, for all users
    * Lottery closed
        * Check prize value and claim it, if value > 0
        * For owner, check pool value and withdraw it, if value > 0
* At any time, if the user Token balance is > 0, it's possible to burn them in exchange for ETH

## IMPROVEMENTS/ TODOs
* Add user feedback mechanism (like loading animations) while users execute operations
* Add user feedback for operastions results - success / failure

## Execute:

```bash
npm install

ng serve
```

[Access application in localhost:4200](http://localhost:4200)
