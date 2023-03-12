import { Body, Controller, Post } from '@nestjs/common';
import { MintRequest, MintResponse } from './myToken.model';
import { MyTokenService } from './myToken.service';

@Controller()
export class MyTokenController {
  constructor(private readonly myTokenService: MyTokenService) {}

  @Post('/my-token/mint')
  getAddress(@Body() request: MintRequest): Promise<MintResponse> {
    return this.myTokenService.mint(request.address, request.amount);
  }
}
