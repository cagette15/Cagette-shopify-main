import { Connection, removeEdgesAndNodes } from 'lib/graphql';
import { shopifyFetch } from 'lib/shopify';

import { productFragment, ProductFragment } from './fragments';
import { reshapeProducts } from './utils';

const QUERY = /* GraphQL */ `
  query getCollectionProducts(
    $handle: String!
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
  ) {
    collection(handle: $handle) {
      products(sortKey: $sortKey, reverse: $reverse, first: 100) {
        edges {
          node {
            ...product
          }
        }
      }
    }
  }
  ${productFragment}
`;

type Variables = {
  handle: string;
  reverse?: boolean;
  sortKey?: string;
};

type Returns = {
  collection: {
    products: Connection<ProductFragment>;
  };
};

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      handle: collection,
      reverse,
      sortKey
    }
  });

  if (!res.body.data.collection) {
    console.error(`No collection found for \`${collection}\``);
    return [];
  }

  return reshapeProducts(removeEdgesAndNodes(res.body.data.collection.products));
}
