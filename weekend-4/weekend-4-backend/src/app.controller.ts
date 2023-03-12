import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/cast-votes')
  castVotes(): string {
    return '';
  }

  @Post('/delegate')
  delegateVotes(): string {
    return '';
  }

  @Get('results')
  getResults(): string {
    return '';
  }

  @Get('last-votes')
  getLastVotes(): string {
    return '';
  }
}
