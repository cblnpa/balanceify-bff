import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Summary extends Document {
  @Prop({ required: true })
  totalBalance!: number;

  @Prop({ required: true })
  totalSavings!: number;

  @Prop({ required: true })
  availableBalance!: number;
}

export const SummarySchema = SchemaFactory.createForClass(Summary);
