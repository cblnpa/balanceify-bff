import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountController } from './account.controller.js';
import { AccountSchema } from './account.schema.js';
import { AccountService } from './account.service.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'account', schema: AccountSchema }])],
  controllers: [AccountController],
  providers: [AccountService],
  exports: [AccountService],
})
export class AccountModule {}
