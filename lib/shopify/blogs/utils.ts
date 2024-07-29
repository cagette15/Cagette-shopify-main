export interface Article {
  id: string;
  title: string;
  handle: string;
  contentHtml?: string;
  publishedAt: string;
}

export interface Blog {
  id: string;
  handle: string;
  title: string;
  articles: Article[];
}

export interface BlogArticle {
  title: string;
  articleByHandle: Article;
}
