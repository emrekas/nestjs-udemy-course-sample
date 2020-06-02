import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserDto } from '../tools/dtos/user/user.dto';
import { UserService } from './user.service';
import { CreateUserDto } from '../tools/dtos/user/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): UserDto[] {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): UserDto {
    return this.userService.findOne(id);
  }

  @Post()
  post(@Body() createUserDto: CreateUserDto): UserDto {
    return this.userService.createUser(createUserDto);
  }
}
