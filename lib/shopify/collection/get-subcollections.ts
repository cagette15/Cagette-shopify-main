import { Connection, removeEdgesAndNodes } from 'lib/graphql';

import { shopifyFetch } from 'lib/shopify';

import { CollectionFragment, collectionFragment } from './fragments';
import { reshapeCollections } from './utils';

const QUERY = /* GraphQL */ `
  query getCollections {
    collections(first: 100, sortKey: TITLE) {
      edges {
        node {
          ...collection
        }
      }
    }
  }
  ${collectionFragment}
`;

type Returns = {
  collections: Connection<CollectionFragment>;
};

export async function getSubCollections() {
  const res = await shopifyFetch<Returns>({
    query: QUERY
  });

  const shopifyCollections = removeEdgesAndNodes(res.body?.data?.collections);

  const reshapedCollections = reshapeCollections(shopifyCollections).filter(
    (collection) => !collection.handle.startsWith('hidden')
  );

  const collections = [
    {
      handle: '',
      title: 'All',
      description: 'All products',
      seo: {
        title: 'All',
        description: 'All products'
      },
      path: '/search',
      updatedAt: new Date().toISOString()
    },
    // Filter out the `hidden` collections.
    // Collections that start with `hidden-*` need to be hidden on the search page.
    ...reshapedCollections
  ];

  return collections;
}
