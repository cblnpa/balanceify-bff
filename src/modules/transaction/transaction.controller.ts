import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ErrorResponse, SuccessResponse } from '../../common/index.js';
import { Transaction } from './transaction.schema.js';
import { TransactionService } from './transaction.service.js';

@Controller('transaction')
export class TransactionController {
  constructor(
    @Inject(TransactionService) private readonly transactionService: TransactionService,
  ) {}

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
  ): Promise<SuccessResponse<Transaction> | ErrorResponse> {
    return this.transactionService.createTransaction(
      createTransactionDto.date,
      createTransactionDto.category,
      createTransactionDto.paymentMethod,
      createTransactionDto.amount,
      createTransactionDto.description,
    );
  }
}
