import { Product, ProductVariant } from '@shopify/hydrogen-react/storefront-api-types';
import { Connection } from 'lib/graphql';
import { ImageFragment, SeoFragment, imageFragment, seoFragment } from 'lib/shopify/fragments';

export const productFragment = /* GraphQL */ `
  fragment product on Product {
    id
    handle
    availableForSale
    title
    description
    descriptionHtml
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
  }
  ${imageFragment}
  ${seoFragment}
`;

export type ProductVariantFragment = Pick<
  ProductVariant,
  'id' | 'title' | 'availableForSale' | 'selectedOptions' | 'price'
>;

export type ProductFragment = Pick<
  Product,
  | 'id'
  | 'handle'
  | 'availableForSale'
  | 'title'
  | 'description'
  | 'descriptionHtml'
  | 'options'
  | 'priceRange'
  | 'tags'
  | 'updatedAt'
> & {
  featuredImage: ImageFragment;
  images: Connection<ImageFragment>;
  seo: SeoFragment;
  variants: Connection<ProductVariantFragment>;
};
