import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Transaction extends Document {
  @Prop({ required: true })
  date!: Date;

  @Prop({ required: true })
  category!: string;

  @Prop({ required: true })
  paymentMethod!: string;

  @Prop({ required: true })
  amount!: number;

  @Prop({ required: false })
  description?: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
