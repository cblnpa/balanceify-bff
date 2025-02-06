import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Category extends Document {
  @Prop({ required: true, type: String })
  name!: string;

  @Prop({ required: true, enum: ['income', 'expense'], type: String })
  type!: string;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'User' })
  userId!: Types.ObjectId;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
