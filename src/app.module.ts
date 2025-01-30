import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AccountModule,
  SubscriptionModule,
  SummaryModule,
  TransactionModule,
  UserModule,
} from './modules/index.js';

@Module({
  imports: [
    MongooseModule.forRoot(''),
    AccountModule,
    SubscriptionModule,
    SummaryModule,
    TransactionModule,
    UserModule,
  ],
})
export class AppModule {}
