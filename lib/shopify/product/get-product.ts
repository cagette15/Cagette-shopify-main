import { shopifyFetch } from 'lib/shopify';

import { ProductFragment, productFragment } from './fragments';
import { reshapeProduct } from './utils';

const QUERY = /* GraphQL */ `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...product
    }
  }
  ${productFragment}
`;

type Variables = {
  handle: string;
};

type Returns = {
  product: ProductFragment;
};

export async function getProduct(handle: string) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      handle
    }
  });

  return reshapeProduct(res.body.data.product, false);
}
