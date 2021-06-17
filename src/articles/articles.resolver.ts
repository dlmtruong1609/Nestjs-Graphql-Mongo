/* eslint-disable @typescript-eslint/no-unused-vars */
import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ArticleDto } from './dto/article.dto';
import { CreateArticleDto } from './dto/create-article.dto';
import { ArticlesGuard } from './guards/articles.guard';
import { PubSub } from 'graphql-subscriptions';
import { ArticlesService } from './articles.service';
import { Article } from 'src/schemas/article.schema';

const pubSub = new PubSub();

@Resolver('Article')
export class ArticlesResolver {
  constructor(private readonly articlesService: ArticlesService) {}

  @Query((returns) => ArticleDto)
  @UseGuards(ArticlesGuard)
  async articles(): Promise<ArticleDto[]> {
    return await this.articlesService.findAll();
  }

  @Query((returns) => ArticleDto)
  async article(
    @Args('id')
    id: string,
  ): Promise<ArticleDto> {
    return this.articlesService.findOne(id);
  }

  @Mutation((returns) => ArticleDto)
  async createArticle(
    @Args('createArticleInput') args: CreateArticleDto,
  ): Promise<ArticleDto> {
    const createdArticle = await this.articlesService.create(args);
    pubSub.publish('articleCreated', { createdArticle: createdArticle });
    return createdArticle;
  }

  @Subscription((returns) => ArticleDto)
  articleCreated() {
    return pubSub.asyncIterator('articleCreated');
  }
}
