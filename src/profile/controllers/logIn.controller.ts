import { Controller, Post } from '@nestjs/common';
import { LogInDto } from '../dtos/logIn.dto';
import { LogInService } from '../services/logIn.service';

@Controller('/logIn')
export class LogInController {
  constructor(private readonly logInService: LogInService) {}
  @Post()
  logIn(logIn: LogInDto) {
    return;
  }
}
