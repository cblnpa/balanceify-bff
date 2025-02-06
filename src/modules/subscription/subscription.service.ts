import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ErrorResponse, SuccessResponse } from '../../common/index.js';
import { Subscription } from './subscription.schema.js';

@Injectable()
export class SubscriptionService {
  constructor(@InjectModel(Subscription.name) private subscriptionModel: Model<Subscription>) {}

  async createSubscription(
    name: string,
    amount: number,
    isShared: boolean,
  ): Promise<SuccessResponse<Subscription> | ErrorResponse> {
    try {
      const newSubscription = new this.subscriptionModel({ name, amount, isShared });
      const savedSubscription = await newSubscription.save();

      return new SuccessResponse(savedSubscription);
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error creating subscription', 'DB_ERROR');
    }
  }

  async findAll(): Promise<SuccessResponse<Subscription[]> | ErrorResponse> {
    try {
      const subscriptionList = await this.subscriptionModel.find().exec();

      if (subscriptionList.length === 0) {
        return new ErrorResponse('No subscriptions found', 'NOT_FOUND');
      }

      return new SuccessResponse(subscriptionList);
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error fetching subscriptions', 'DB_ERROR');
    }
  }

  async findById(id: string): Promise<SuccessResponse<Subscription> | ErrorResponse> {
    try {
      if (!Types.ObjectId.isValid(id)) {
        return new ErrorResponse('Subscription does not exist', 'INVALID_ID');
      }

      const subscription = await this.subscriptionModel.findById(id).exec();

      if (!subscription) {
        return new ErrorResponse('Subscription not found', 'SUBSCRIPTION_NOT_FOUND');
      }

      return new SuccessResponse(subscription);
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error fetching subscription', 'DB_ERROR');
    }
  }
}
