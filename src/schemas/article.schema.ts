import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema({ timestamps: true })
export class Article {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ default: false })
  isPublished: boolean;

  @Prop({ required: true })
  content: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
