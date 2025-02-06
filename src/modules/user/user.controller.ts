import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ErrorResponse, SuccessResponse } from '../../common/index.js';
import { User } from './user.schema.js';
import { UserService } from './user.service.js';

@Controller('user')
export class UserController {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  @Post('register')
  async createUser(
    @Body() createUserDto: { name: string; email: string; password: string },
  ): Promise<SuccessResponse<User> | ErrorResponse> {
    return this.userService.createUser(
      createUserDto.name,
      createUserDto.email,
      createUserDto.password,
    );
  }

  @Post('login')
  async login(
    @Body() loginDto: { email: string; password: string },
  ): Promise<SuccessResponse<{ userId: string; name: string; email: string }> | ErrorResponse> {
    return this.userService.validateUser(loginDto.email, loginDto.password);
  }

  @Get()
  async getAllUsers(): Promise<SuccessResponse<User[]> | ErrorResponse> {
    return this.userService.findAll();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<SuccessResponse<User> | ErrorResponse> {
    return this.userService.findById(id);
  }
}
