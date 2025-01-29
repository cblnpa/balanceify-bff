import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module.js';

@Module({
  imports: [MongooseModule.forRoot(''), UserModule],
})
export class AppModule {}
