import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './modules/prisma/prisma.service';
import {} from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}
}
