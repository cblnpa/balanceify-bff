import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './account.schema.js';

@Injectable()
export class AccountService {
  constructor(@InjectModel(Account.name) private accountModel: Model<Account>) {}

  async createAccount(name: string, type: string, balance: string): Promise<Account> {
    const newAccount = new this.accountModel({ name, type, balance });
    return newAccount.save();
  }

  async findAll(): Promise<Account[]> {
    return this.accountModel.find().exec();
  }

  async findById(id: string): Promise<Account | null> {
    return this.accountModel.findById(id).exec();
  }
}
