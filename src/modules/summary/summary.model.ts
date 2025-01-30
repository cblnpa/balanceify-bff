import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SummaryController } from './summary.controller.js';
import { SummarySchema } from './summary.schema.js';
import { SummaryService } from './summary.service.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'summary', schema: SummarySchema }])],
  controllers: [SummaryController],
  providers: [SummaryService],
  exports: [SummaryService],
})
export class SummaryModule {}
