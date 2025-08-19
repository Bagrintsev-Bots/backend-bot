import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [];

  async getUsersAsync(): Promise<any> {
    return this.users;
  }
}
