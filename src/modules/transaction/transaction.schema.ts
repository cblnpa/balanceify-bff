import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Transaction extends Document {
  @Prop({ required: true, type: Date })
  date!: Date;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Category' })
  category!: string;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Account' })
  paymentMethod!: string;

  @Prop({ required: true, type: Number })
  amount!: number;

  @Prop({ required: false, type: String })
  description?: string;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'User' })
  userId!: Types.ObjectId;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
