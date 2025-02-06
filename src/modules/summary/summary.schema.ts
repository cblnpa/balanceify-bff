import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Summary extends Document {
  @Prop({ required: true, type: Number })
  totalBalance!: number;

  @Prop({ required: true, type: Number })
  totalSavings!: number;

  @Prop({ required: true, type: Number })
  availableBalance!: number;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'User' })
  userId!: Types.ObjectId;
}

export const SummarySchema = SchemaFactory.createForClass(Summary);
