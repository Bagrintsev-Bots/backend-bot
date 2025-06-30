import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KatModule } from './kat/kat.module';

@Module({
  imports: [KatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
