export const contractAddress = "0x204a0c49b84141F33D29b87EA23ED21F00E02678"
export const usdcContractAddress = "0x0FA8781a83E46826621b3BC094Ea2A0212e71B23"
export const usdcContractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burnUSDC",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mintUSDC",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_minter",
				"type": "address"
			}
		],
		"name": "setMinter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
export const contractAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_challengeId",
				"type": "uint256"
			}
		],
		"name": "acceptChallenge",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "nCurrency",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dCurrency",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "cPrice",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "validity",
				"type": "uint256"
			},
			{
				"internalType": "enum Challenge.Side",
				"name": "cSide",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "cAmount",
				"type": "uint256"
			}
		],
		"name": "addChallenge",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addy",
				"type": "address"
			}
		],
		"name": "setIdMappingContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_tellorAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "usdContract",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "challenger",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "acceptor",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "challengeId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "numeratorCurrency",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "denominatorCurrency",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "validity",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum Challenge.Side",
				"name": "cSide",
				"type": "uint8"
			}
		],
		"name": "ChallengeAccepted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "challenger",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "challengeId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "numeratorCurrency",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "denominatorCurrency",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "validity",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum Challenge.Side",
				"name": "cSide",
				"type": "uint8"
			}
		],
		"name": "NewChallenge",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_challengeId",
				"type": "uint256"
			}
		],
		"name": "withdrawWinnings",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "allChallenges",
		"outputs": [
			{
				"internalType": "string",
				"name": "numeratorCurrency",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "denominatorCurrency",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "challengeId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "challengePrice",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
			},
			{
				"internalType": "enum Challenge.Side",
				"name": "challengeSide",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "challenger",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "acceptor",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Challenges",
		"outputs": [
			{
				"internalType": "string",
				"name": "numeratorCurrency",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "denominatorCurrency",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "challengeId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "challengePrice",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
			},
			{
				"internalType": "enum Challenge.Side",
				"name": "challengeSide",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "challenger",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "acceptor",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_challengeId",
				"type": "uint256"
			}
		],
		"name": "challengeWinner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "counter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllChallenges",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "numeratorCurrency",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "denominatorCurrency",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "challengeId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "challengePrice",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "endTime",
						"type": "uint256"
					},
					{
						"internalType": "enum Challenge.Side",
						"name": "challengeSide",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "challenger",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "acceptor",
						"type": "address"
					}
				],
				"internalType": "struct Challenge.Contest[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_queryId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "_timestamp",
				"type": "uint256"
			}
		],
		"name": "getDataAfter",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "_value",
				"type": "bytes"
			},
			{
				"internalType": "uint256",
				"name": "_timestampRetrieved",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_queryId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "_timestamp",
				"type": "uint256"
			}
		],
		"name": "getDataBefore",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "_value",
				"type": "bytes"
			},
			{
				"internalType": "uint256",
				"name": "_timestampRetrieved",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_queryId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "_timestamp",
				"type": "uint256"
			}
		],
		"name": "getIndexForDataAfter",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_found",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_queryId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "_timestamp",
				"type": "uint256"
			}
		],
		"name": "getIndexForDataBefore",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_found",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_queryId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "_timestamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_maxAge",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_maxCount",
				"type": "uint256"
			}
		],
		"name": "getMultipleValuesBefore",
		"outputs": [
			{
				"internalType": "bytes[]",
				"name": "_values",
				"type": "bytes[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_timestamps",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_queryId",
				"type": "bytes32"
			}
		],
		"name": "getNewValueCountbyQueryId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_queryId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "_timestamp",
				"type": "uint256"
			}
		],
		"name": "getReporterByTimestamp",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "fst",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "snd",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ctimestamp",
				"type": "uint256"
			}
		],
		"name": "getSpotPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_queryId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getTimestampbyQueryIdandIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUserChallenges",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "numeratorCurrency",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "denominatorCurrency",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "challengeId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "challengePrice",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "endTime",
						"type": "uint256"
					},
					{
						"internalType": "enum Challenge.Side",
						"name": "challengeSide",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "challenger",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "acceptor",
						"type": "address"
					}
				],
				"internalType": "struct Challenge.Contest[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "idMappingContract",
		"outputs": [
			{
				"internalType": "contract IMappingContract",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_queryId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "_timestamp",
				"type": "uint256"
			}
		],
		"name": "isInDispute",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_queryId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "_timestamp",
				"type": "uint256"
			}
		],
		"name": "retrieveData",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tellor",
		"outputs": [
			{
				"internalType": "contract ITellor",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "usdcContract",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userChallenges",
		"outputs": [
			{
				"internalType": "string",
				"name": "numeratorCurrency",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "denominatorCurrency",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "challengeId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "challengePrice",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
			},
			{
				"internalType": "enum Challenge.Side",
				"name": "challengeSide",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "challenger",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "acceptor",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_id",
				"type": "bytes32"
			}
		],
		"name": "valueFor",
		"outputs": [
			{
				"internalType": "int256",
				"name": "_value",
				"type": "int256"
			},
			{
				"internalType": "uint256",
				"name": "_timestamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_statusCode",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]