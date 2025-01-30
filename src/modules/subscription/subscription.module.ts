import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscriptionController } from './subscription.controller.js';
import { SubscriptionSchema } from './subscription.schema.js';
import { SubscriptionService } from './subscription.service.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'subscription', schema: SubscriptionSchema }])],
  controllers: [SubscriptionController],
  providers: [SubscriptionService],
  exports: [SubscriptionService],
})
export class SubscriptionModule {}
