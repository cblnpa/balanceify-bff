import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Subscription } from './subscription.schema.js';
import { SubscriptionService } from './subscription.service.js';

@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Post()
  async create(
    @Body() createSubscriptionDto: { name: string; amount: number; isShared: boolean },
  ): Promise<Subscription> {
    return this.subscriptionService.createSubscription(
      createSubscriptionDto.name,
      createSubscriptionDto.amount,
      createSubscriptionDto.isShared,
    );
  }

  @Get()
  async getAllSubscriptions(): Promise<Subscription[]> {
    return this.subscriptionService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Subscription | null> {
    return this.subscriptionService.findById(id);
  }
}
