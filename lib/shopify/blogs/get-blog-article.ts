import type { Article } from '@shopify/hydrogen-react/storefront-api-types';
import { shopifyFetch } from 'lib/shopify/api';

const QUERY = /* GraphQL */ `
  query GetArticleByHandle($blogHandle: String!, $articleHandle: String!) {
    blogByHandle(handle: $blogHandle) {
      title
      articleByHandle(handle: $articleHandle) {
        id
        title
        handle
        contentHtml
        publishedAt
      }
    }
  }
`;

type Variables = { blogHandle: string; articleHandle: string };

type Returns = {
  blogByHandle: {
    title: string;
    articleByHandle: Pick<
      Article,
      'id' | 'title' | 'handle' | 'author' | 'contentHtml' | 'publishedAt'
    >;
  };
};

export async function getBlogArticle(blogHandle: string, articleHandle: string) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: { blogHandle, articleHandle }
  });

  const blogArticles = res.body.data.blogByHandle;

  return blogArticles;
}
