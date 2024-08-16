import { shopifyFetch } from 'lib/shopify/api';
import { Blog } from './utils';

const QUERY = /* GraphQL */ `
  query getBlogs($first: Int!) {
    blogs(first: $first) {
      edges {
        node {
          id
          handle
          title
          articles(first: 10) {
            edges {
              node {
                id
                title
                handle
                publishedAt
              }
            }
          }
        }
      }
    }
  }
`;

type Variables = { first: number };

export async function getBlogs(first: number) {
  const res = await shopifyFetch<any, Variables>({
    query: QUERY,
    variables: {
      first
    }
  });

  const blogs: Blog[] = res.body.data.blogs.edges.map((blog: any) => ({
    id: blog.node.id,
    handle: blog.node.handle,
    title: blog.node.title,
    articles: blog.node.articles.edges.map((article: any) => ({
      id: article.node.id,
      title: article.node.title,
      handle: article.node.handle,
      publishedAt: article.node.publishedAt
    }))
  }));

  return blogs;
}
