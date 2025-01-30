import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Subscription } from './subscription.schema.js';

@Injectable()
export class SubscriptionService {
  constructor(@InjectModel(Subscription.name) private subscriptionModel: Model<Subscription>) {}

  async createSubscription(name: string, amount: number, isShared: boolean): Promise<Subscription> {
    const newSubscription = new this.subscriptionModel({ name, amount, isShared });
    return newSubscription.save();
  }

  async findAll(): Promise<Subscription[]> {
    return this.subscriptionModel.find().exec();
  }

  async findById(id: string): Promise<Subscription | null> {
    return this.subscriptionModel.findById(id).exec();
  }
}
