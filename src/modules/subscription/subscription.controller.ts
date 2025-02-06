import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ErrorResponse, SuccessResponse } from '../../common/index.js';
import { Subscription } from './subscription.schema.js';
import { SubscriptionService } from './subscription.service.js';

@Controller('subscription')
export class SubscriptionController {
  constructor(
    @Inject(SubscriptionService) private readonly subscriptionService: SubscriptionService,
  ) {}

  @Post()
  async create(
    @Body() createSubscriptionDto: { name: string; amount: number; isShared: boolean },
  ): Promise<SuccessResponse<Subscription> | ErrorResponse> {
    return this.subscriptionService.createSubscription(
      createSubscriptionDto.name,
      createSubscriptionDto.amount,
      createSubscriptionDto.isShared,
    );
  }

  @Get()
  async getAllSubscriptions(): Promise<SuccessResponse<Subscription[]> | ErrorResponse> {
    return this.subscriptionService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<SuccessResponse<Subscription> | ErrorResponse> {
    return this.subscriptionService.findById(id);
  }
}
