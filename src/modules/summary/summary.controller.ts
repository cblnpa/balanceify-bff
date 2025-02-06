import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ErrorResponse, SuccessResponse } from '../../common/index.js';
import { Summary } from './summary.schema.js';
import { SummaryService } from './summary.service.js';

@Controller('summary')
export class SummaryController {
  constructor(@Inject(SummaryService) private readonly summaryService: SummaryService) {}

  @Post()
  async createSummary(
    @Body()
    createSummaryDto: {
      totalBalance: number;
      totalSavings: number;
      availableBalance: number;
    },
  ): Promise<SuccessResponse<Summary> | ErrorResponse> {
    return this.summaryService.createSummary(
      createSummaryDto.totalBalance,
      createSummaryDto.totalSavings,
      createSummaryDto.availableBalance,
    );
  }
}
