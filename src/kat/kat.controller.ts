import { Controller, Get } from '@nestjs/common';
import { KatService } from './kat.service';

@Controller('kat')
export class KatController {
  constructor(private readonly katService: KatService) {}

  @Get()
  getAsync() {
    re;
  }
}
