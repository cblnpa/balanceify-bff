import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User extends Document {
  declare _id: Types.ObjectId;

  @Prop({ required: true, type: String })
  name!: string;

  @Prop({ required: true, unique: true, type: String })
  email!: string;

  @Prop({ required: true, select: false, type: String })
  password!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
