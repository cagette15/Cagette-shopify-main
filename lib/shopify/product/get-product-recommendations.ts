import { shopifyFetch } from 'lib/shopify';

import { ProductFragment, productFragment } from './fragments';
import { reshapeProducts } from './utils';

const QUERY = /* GraphQL */ `
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...product
    }
  }
  ${productFragment}
`;

type Variables = {
  productId: string;
};

type Returns = {
  productRecommendations: ProductFragment[];
};

export async function getProductRecommendations(productId: string) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      productId
    }
  });

  return reshapeProducts(res.body.data.productRecommendations);
}
