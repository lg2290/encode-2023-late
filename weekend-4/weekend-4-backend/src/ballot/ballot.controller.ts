import { Controller, Get, Query } from '@nestjs/common';
import { BallotAddressResponse } from './ballot.model';
import { BallotService } from './ballot.service';

@Controller()
export class BallotController {
  constructor(private readonly ballotService: BallotService) {}

  @Get('/ballot/address')
  getAddress(@Query('snapshot-block') snapshotBlock: number): Promise<BallotAddressResponse> {
    return this.ballotService.getAddress(snapshotBlock);
  }
}
