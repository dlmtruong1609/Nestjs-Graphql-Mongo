import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from 'src/schemas/article.schema';
import { ArticlesService } from './articles.service';
import { ArticlesResolver } from './articles.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
  ],
  providers: [ArticlesService, ArticlesResolver],
})
export class ArticlesModule {}
