export class MyTokenAddressResponse {
    constructor(public address: string){}
}

export class MintRequest{
    constructor(public address: string, public amount: number){}
}

export class MintResponse{
    constructor(public transactionHash: string, public blockNumber: number){}
}

export class DelegateResult {
    constructor(transactionHash: string, public blockNumber: number) {}
}