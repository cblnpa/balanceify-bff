import { Body, Controller, Post } from '@nestjs/common';
import { Transaction } from './transaction.schema.js';
import { TransactionService } from './transaction.service.js';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async createTransaction(
    @Body()
    createTransactionDto: {
      date: Date;
      category: string;
      paymentMethod: string;
      amount: number;
      description?: string;
    },
  ): Promise<Transaction> {
    return this.transactionService.createTransaction(
      createTransactionDto.date,
      createTransactionDto.category,
      createTransactionDto.paymentMethod,
      createTransactionDto.amount,
      createTransactionDto.description,
    );
  }
}
