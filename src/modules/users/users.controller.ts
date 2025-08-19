import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private UserService: UsersService) {}

  @Get()
  async getUsers(): Promise<never[]> {
    return await this.UserService.getUsersAsync();
  }
}
