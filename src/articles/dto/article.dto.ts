import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ArticleDto {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;

  @Field(() => String)
  description: string;

  @Field(() => Boolean)
  isPublished: boolean;
}
