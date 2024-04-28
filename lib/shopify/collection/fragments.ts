import type { Collection } from '@shopify/hydrogen-react/storefront-api-types';

import { SeoFragment, seoFragment } from 'lib/shopify/fragments';

export type CollectionFragment = Pick<
  Collection,
  'handle' | 'title' | 'description' | 'updatedAt'
> & { seo: SeoFragment };

export const collectionFragment = /* GraphQL */ `
  fragment collection on Collection {
    handle
    title
    description
    seo {
      ...seo
    }
    updatedAt
  }
  ${seoFragment}
`;
