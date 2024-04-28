import { Connection, removeEdgesAndNodes } from 'lib/graphql';

import { shopifyFetch } from 'lib/shopify';

import { ProductFragment, productFragment } from './fragments';
import { reshapeProducts } from './utils';

const QUERY = /* GraphQL */ `
  query getProducts($sortKey: ProductSortKeys, $reverse: Boolean, $query: String) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${productFragment}
`;

type Variables = {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
};

type Returns = {
  products: Connection<ProductFragment>;
};

export async function getProducts({
  query,
  reverse,
  sortKey
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      query,
      reverse,
      sortKey
    }
  });

  return reshapeProducts(removeEdgesAndNodes(res.body.data.products));
}
