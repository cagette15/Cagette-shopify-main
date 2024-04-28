import type { Page } from '@shopify/hydrogen-react/storefront-api-types';

import { Connection, removeEdgesAndNodes } from 'lib/graphql';
import { shopifyFetch } from 'lib/shopify';

import { pageFragment } from './fragments';

const QUERY = /* GraphQL */ `
  query getPages {
    pages(first: 100) {
      edges {
        node {
          ...page
        }
      }
    }
  }
  ${pageFragment}
`;

type Returns = {
  pages: Connection<Page>;
};

export async function getPages() {
  const res = await shopifyFetch<Returns>({
    query: QUERY
  });

  return removeEdgesAndNodes(res.body.data.pages);
}
