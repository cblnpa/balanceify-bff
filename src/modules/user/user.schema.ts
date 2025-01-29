import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Account } from '../account/account.schema.js';
import { Subscription } from '../subscription/subscription.schema.js';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true, unique: true })
  email!: string;

  @Prop({ required: true, select: false })
  password!: string;

  @Prop({ type: [{ type: Object }] })
  accounts?: Account[];

  @Prop({ type: [{ type: Object }] })
  subscriptions?: Subscription[];
}

export const UserSchema = SchemaFactory.createForClass(User);
