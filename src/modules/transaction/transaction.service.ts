import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction } from './transaction.schema.js';

@Injectable()
export class TransactionService {
  constructor(@InjectModel(Transaction.name) private transactionModel: Model<Transaction>) {}

  async createTransaction(
    date: Date,
    category: string,
    paymentMethod: string,
    amount: number,
    description?: string,
  ): Promise<Transaction> {
    const newTransaction = new this.transactionModel({
      date,
      category,
      paymentMethod,
      amount,
      description,
    });
    return newTransaction.save();
  }

  async findAll(): Promise<Transaction[]> {
    return this.transactionModel.find().exec();
  }

  async findByCategory(category: string): Promise<Transaction[]> {
    return this.transactionModel.find({ category: category }).exec();
  }

  async findByPaymentMethod(paymentMethod: string): Promise<Transaction[]> {
    return this.transactionModel.find({ paymentMethod: paymentMethod }).exec();
  }

  async findByDescription(description: string): Promise<Transaction[]> {
    return this.transactionModel.find({ description: new RegExp(description, 'i') });
  }
}
