import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Subscription extends Document {
  @Prop({ required: true, type: String })
  name!: string;

  @Prop({ required: true, type: Number })
  amount!: number;

  @Prop({ required: true, type: Boolean })
  isShared!: boolean;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'User' })
  userId!: Types.ObjectId;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
