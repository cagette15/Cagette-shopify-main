import { shopifyFetch } from 'lib/shopify';

import { CollectionFragment, collectionFragment } from './fragments';
import { reshapeCollection } from './utils';

const QUERY = /* GraphQL */ `
  query getCollection($handle: String!) {
    collection(handle: $handle) {
      ...collection
    }
  }
  ${collectionFragment}
`;

type Variables = {
  handle: string;
};

type Returns = {
  collection: CollectionFragment;
};

export async function getCollection(handle: string) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      handle
    }
  });

  return reshapeCollection(res.body.data.collection);
}
