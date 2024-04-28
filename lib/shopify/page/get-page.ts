import type { Page } from '@shopify/hydrogen-react/storefront-api-types';

import { shopifyFetch } from 'lib/shopify';

import { pageFragment } from './fragments';

const QUERY = /* GraphQL */ `
  query getPage($handle: String!) {
    pageByHandle(handle: $handle) {
      ...page
    }
  }
  ${pageFragment}
`;

type Variables = {
  handle: string;
};

type Returns = {
  pageByHandle: Page;
};

export async function getPage(handle: string) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: { handle }
  });

  return res.body.data.pageByHandle;
}
