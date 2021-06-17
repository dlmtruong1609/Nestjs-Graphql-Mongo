
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateArticleInput {
    title?: string;
    content?: string;
}

export abstract class IQuery {
    abstract articles(): Article[] | Promise<Article[]>;

    abstract article(id: string): Article | Promise<Article>;
}

export abstract class IMutation {
    abstract createArticle(createArticleInput?: CreateArticleInput): Article | Promise<Article>;
}

export abstract class ISubscription {
    abstract articleCreated(): Article | Promise<Article>;
}

export class Article {
    id?: string;
    title?: string;
    description?: string;
    isPublished?: boolean;
    content?: string;
}
