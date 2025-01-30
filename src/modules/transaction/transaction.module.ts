import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionController } from './transaction.controller.js';
import { TransactionSchema } from './transaction.schema.js';
import { TransactionService } from './transaction.service.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'transaction', schema: TransactionSchema }])],
  controllers: [TransactionController],
  providers: [TransactionService],
  exports: [TransactionService],
})
export class TransactionModule {}
