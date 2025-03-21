/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  getUsers() {
    return this.prismaService.user.findMany();
  }

  createUser(user: CreateUserDto) {
    return this.prismaService.user.create({ data: user });
  }
}
