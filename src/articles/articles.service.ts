import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from 'src/schemas/article.schema';
import { ArticleDto } from './dto/article.dto';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name)
    private articleModel: Model<Article>,
  ) {}

  async create(createArticleDto: CreateArticleDto): Promise<ArticleDto | any> {
    const createdArticle = new this.articleModel(createArticleDto);

    return await createdArticle.save();
  }

  async update(
    id: string,
    createArticleDto: CreateArticleDto,
  ): Promise<ArticleDto | any> {
    const article = await this.articleModel.findByIdAndUpdate(
      id,
      createArticleDto,
    );

    return await this.articleModel.findById(article._id);
  }

  async delete(id: string): Promise<ArticleDto | any> {
    return this.articleModel.findByIdAndDelete(id);
  }

  async findOne(id: string): Promise<ArticleDto | any> {
    const article = await this.articleModel.findById(id);
    return article;
  }

  async findAll(): Promise<ArticleDto[] | any> {
    return this.articleModel.find();
  }
}
