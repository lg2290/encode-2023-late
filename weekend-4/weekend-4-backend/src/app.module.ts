import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BallotController } from './ballot/ballot.controller';
import { BallotService } from './ballot/ballot.service';
import { MyTokenController } from './my-token/myToken.controller';
import { MyTokenService } from './my-token/myToken.service';
import { SignerService } from './signer/signer.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, BallotController, MyTokenController],
  providers: [AppService, BallotService, MyTokenService, SignerService],
})
export class AppModule {}
