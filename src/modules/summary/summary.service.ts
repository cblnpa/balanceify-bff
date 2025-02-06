import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Summary } from './summary.schema.js';

@Injectable()
export class SummaryService {
  constructor(@InjectModel(Summary.name) private summaryModel: Model<Summary>) {}

  async createSummary(
    totalBalance: number,
    totalSavings: number,
    availableBalance: number,
  ): Promise<Summary> {
    const newSummary = new this.summaryModel({ totalBalance, totalSavings, availableBalance });
    return newSummary.save();
  }
}
