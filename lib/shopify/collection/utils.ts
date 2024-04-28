import { CollectionFragment } from './fragments';

export const reshapeCollection = (collection: CollectionFragment) => {
  if (!collection) {
    return undefined;
  }

  return {
    ...collection,
    path: `/search/${collection.handle}`
  };
};

export const reshapeCollections = (collections: CollectionFragment[]) => {
  const reshapedCollections: SimpleCollection[] = [];

  for (const collection of collections) {
    if (collection) {
      const reshapedCollection = reshapeCollection(collection);

      if (reshapedCollection) {
        reshapedCollections.push(reshapedCollection);
      }
    }
  }

  return reshapedCollections;
};

export type SimpleCollection = NonNullable<ReturnType<typeof reshapeCollection>>;
