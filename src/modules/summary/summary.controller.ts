import { Body, Controller, Post } from '@nestjs/common';
import { Summary } from './summary.schema.js';
import { SummaryService } from './summary.service.js';

@Controller('summary')
export class SummaryController {
  constructor(private readonly summaryService: SummaryService) {}

  @Post()
  async createSummary(
    @Body()
    createSummaryDto: {
      totalBalance: number;
      totalSavings: number;
      availableBalance: number;
    },
  ): Promise<Summary> {
    return this.summaryService.createSummary(
      createSummaryDto.totalBalance,
      createSummaryDto.totalSavings,
      createSummaryDto.availableBalance,
    );
  }
}
