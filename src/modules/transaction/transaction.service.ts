import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ErrorResponse, SuccessResponse } from '../../common/index.js';
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
  ): Promise<SuccessResponse<Transaction> | ErrorResponse> {
    try {
      const newTransaction = new this.transactionModel({
        date,
        category,
        paymentMethod,
        amount,
        description,
      });
      const savedTransaction = await newTransaction.save();

      return new SuccessResponse(savedTransaction);
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error creating transaction', 'DB_ERROR');
    }
  }

  async findAll(): Promise<SuccessResponse<Transaction[]> | ErrorResponse> {
    try {
      const transactionList = await this.transactionModel.find().exec();

      if (transactionList.length === 0) {
        return new ErrorResponse('No transactions found', 'NOT_FOUND');
      }

      return new SuccessResponse(transactionList);
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error fetching transaction', 'DB_ERROR');
    }
  }

  async findByCategory(category: string): Promise<SuccessResponse<Transaction[]> | ErrorResponse> {
    try {
      const transactionList = await this.transactionModel.find({ category: category }).exec();

      if (transactionList.length === 0) {
        return new ErrorResponse('No transactions found', 'NOT_FOUND');
      }

      return new SuccessResponse(transactionList);
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error fetching transaction', 'DB_ERROR');
    }
  }

  async findByPaymentMethod(
    paymentMethod: string,
  ): Promise<SuccessResponse<Transaction[]> | ErrorResponse> {
    try {
      const transactionList = await this.transactionModel
        .find({ paymentMethod: paymentMethod })
        .exec();

      if (transactionList.length === 0) {
        return new ErrorResponse('No transactions found', 'NOT_FOUND');
      }

      return new SuccessResponse(transactionList);
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error fetching transaction', 'DB_ERROR');
    }
  }

  async findByDescription(
    description: string,
  ): Promise<SuccessResponse<Transaction[]> | ErrorResponse> {
    try {
      const transactionList = await this.transactionModel.find({
        description: new RegExp(description, 'i'),
      });

      if (transactionList.length === 0) {
        return new ErrorResponse('No transactions found', 'NOT_FOUND');
      }

      return new SuccessResponse(transactionList);
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error fetching transaction', 'DB_ERROR');
    }
  }
}
