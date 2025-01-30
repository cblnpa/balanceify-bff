import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Account extends Document {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true, enum: ['normal', 'ahorro'] })
  type!: string;

  @Prop({ required: true, default: 0 })
  balance!: number;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
