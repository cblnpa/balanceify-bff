import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Subscription extends Document {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  amount!: number;

  @Prop({ required: true })
  isShared!: boolean;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
