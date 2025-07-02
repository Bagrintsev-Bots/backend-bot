import { Module } from '@nestjs/common';
import { LogInController } from './controllers/logIn.controller';
import { LogInService } from './services/logIn.service';

@Module({
  controllers: [LogInController],
  providers: [LogInService],
})
export class ProfileModule {}
