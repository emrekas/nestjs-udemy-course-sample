import { Injectable } from '@nestjs/common';
import { UserModel } from 'tools/models/user.model';
import { CreateUserDto } from 'tools/dtos/user/create-user.dto';
import { UserDto } from 'tools/dtos/user/user.dto';

const result: UserModel[] = [];

@Injectable()
export class UserService {
  findAll(): UserDto[] {
    return result;
  }

  findOne(id: string): UserDto {
    return result.find(i => i.id === id);
  }

  createUser(userDto: CreateUserDto): UserDto {
    const isExist = result.some(i => i.email == userDto.email);

    const createUser: UserModel = new UserModel();
    Object.assign(createUser, userDto);

    if (!isExist) {
      this.createMockUser(createUser);
    }
    return createUser;
  }

  private createMockUser(userModel: UserModel) {
    const user: UserModel = new UserModel();
    Object.assign(user, userModel);
    result.push(user);
  }
}
