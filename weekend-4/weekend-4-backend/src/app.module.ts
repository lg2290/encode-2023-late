import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BallotController } from './ballot/ballot.controller';
import { BallotService } from './ballot/ballot.service';
import { MyTokenController } from './my-token/myToken.controller';
import { MyTokenService } from './my-token/myToken.service';
import { SignerService } from './signer/signer.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [BallotController, MyTokenController],
  providers: [BallotService, MyTokenService, SignerService],
})
export class AppModule {}
