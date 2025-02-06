import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Account extends Document {
  @Prop({ required: true, type: String })
  name!: string;

  @Prop({ required: true, enum: ['normal', 'ahorro'], type: String })
  type!: string;

  @Prop({ required: true, default: 0, type: Number })
  balance!: number;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'User' })
  userId!: Types.ObjectId;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
