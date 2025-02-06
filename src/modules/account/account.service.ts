import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ErrorResponse, SuccessResponse } from '../../common/index.js';
import { Account } from './account.schema.js';

@Injectable()
export class AccountService {
  constructor(@InjectModel(Account.name) private accountModel: Model<Account>) {}

  async createAccount(
    name: string,
    type: string,
    balance: string,
  ): Promise<SuccessResponse<Account> | ErrorResponse> {
    try {
      const newAccount = new this.accountModel({ name, type, balance });
      const savedUser = await newAccount.save();

      return new SuccessResponse(savedUser);
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error creating account', 'DB_ERROR');
    }
  }

  async findAll(): Promise<SuccessResponse<Account[]> | ErrorResponse> {
    try {
      const accountList = await this.accountModel.find().exec();

      if (accountList.length === 0) {
        return new ErrorResponse('No account found', 'NOT_FOUND');
      }

      return new SuccessResponse(accountList);
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error fetching accounts', 'DB_ERROR');
    }
  }

  async findById(id: string): Promise<SuccessResponse<Account> | ErrorResponse> {
    try {
      if (!Types.ObjectId.isValid(id)) {
        return new ErrorResponse('Account does not exist', 'INVALID_ID');
      }

      const account = await this.accountModel.findById(id).exec();

      if (!account) {
        return new ErrorResponse('Account not found', 'ACCOUNT_NOT_FOUND');
      }

      return new SuccessResponse(account);
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error fetching account', 'DB_ERROR');
    }
  }
}
