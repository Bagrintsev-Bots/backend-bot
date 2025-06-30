import { Module } from '@nestjs/common';
import { KatService } from './kat.service';
import { KatController } from './kat.controller';

@Module({
  controllers: [KatController],
  providers: [KatService],
})
export class KatModule {}
