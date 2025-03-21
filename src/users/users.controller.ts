/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller({})
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/users')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post('/users')
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }
}
