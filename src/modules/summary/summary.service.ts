import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ErrorResponse, SuccessResponse } from '../../common/index.js';
import { Summary } from './summary.schema.js';

@Injectable()
export class SummaryService {
  constructor(@InjectModel(Summary.name) private summaryModel: Model<Summary>) {}

  async createSummary(
    totalBalance: number,
    totalSavings: number,
    availableBalance: number,
  ): Promise<SuccessResponse<Summary> | ErrorResponse> {
    try {
      const newSummary = new this.summaryModel({ totalBalance, totalSavings, availableBalance });
      const savedSummary = await newSummary.save();

      return new SuccessResponse(savedSummary);
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error creating summary', 'DB_ERROR');
    }
  }
}
