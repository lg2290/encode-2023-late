import { Body, Controller, Get, Post } from '@nestjs/common';
import { MintRequest, MintResponse, MyTokenAddressResponse } from './myToken.model';
import { MyTokenService } from './myToken.service';

@Controller()
export class MyTokenController {
  constructor(private readonly myTokenService: MyTokenService) {}

  @Get('/my-token/address')
  getAddress(): MyTokenAddressResponse {
    return this.myTokenService.getAddress();
  }

  @Post('/my-token/mint')
  mint(@Body() request: MintRequest): Promise<MintResponse> {
    return this.myTokenService.mint(request.address, request.amount);
  }
}
