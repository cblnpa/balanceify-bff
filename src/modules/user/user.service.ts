import * as argon2 from 'argon2';
import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ErrorResponse, SuccessResponse } from '../../common/index.js';
import { User } from './user.schema.js';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<SuccessResponse<User> | ErrorResponse> {
    try {
      const existingUser = await this.userModel.findOne({ email });

      if (existingUser) {
        return new ErrorResponse('User already exists', 'NOT_UNIQUE');
      }

      const hashedPassword = await argon2.hash(password);
      const newUser = await this.userModel.create({
        name,
        email,
        password: hashedPassword,
        accounts: [],
        subscriptions: [],
      });
      const savedUser = await newUser.save();

      return new SuccessResponse(savedUser);
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error creating account', 'DB_ERROR');
    }
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<SuccessResponse<{ userId: string; name: string; email: string }> | ErrorResponse> {
    try {
      const user = await this.userModel.findOne({ email }).select('+password');

      if (!user) {
        return new ErrorResponse('User not found', 'NOT_FOUND');
      }

      const isPasswordValid = await argon2.verify(user.password, password);

      if (!isPasswordValid) {
        return new ErrorResponse('Invalid credentials', 'INVALID');
      }

      return new SuccessResponse({
        userId: (user.id as Types.ObjectId).toHexString(),
        name: user.name,
        email: user.email,
      });
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error validating account', 'DB_ERROR');
    }
  }

  async findAll(): Promise<SuccessResponse<User[]> | ErrorResponse> {
    try {
      const userList = await this.userModel.find().exec();

      if (userList.length === 0) {
        return new ErrorResponse('No users found', 'NOT_FOUND');
      }

      return new SuccessResponse(userList);
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error fetching users', 'DB_ERROR');
    }
  }

  async findById(id: string): Promise<SuccessResponse<User> | ErrorResponse> {
    try {
      if (!Types.ObjectId.isValid(id)) {
        return new ErrorResponse('User does not exist', 'INVALID_ID');
      }

      const user = await this.userModel.findById(id).exec();

      if (!user) {
        return new ErrorResponse('User not found', 'NOT_FOUND');
      }

      return new SuccessResponse(user);
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error fetching user', 'DB_ERROR');
    }
  }
}
