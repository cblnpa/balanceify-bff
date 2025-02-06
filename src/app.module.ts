import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from './config/database.config.js';
import {
  AccountModule,
  CategoryModule,
  SubscriptionModule,
  SummaryModule,
  TransactionModule,
  UserModule,
} from './modules/index.js';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [databaseConfig], isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('mongoURI'),
      }),
    }),
    AccountModule,
    CategoryModule,
    SubscriptionModule,
    SummaryModule,
    TransactionModule,
    UserModule,
  ],
})
export class AppModule {}
