import {
  Cart,
  CartCost,
  CartLine,
  CartLineCost,
  ProductVariant
} from '@shopify/hydrogen-react/storefront-api-types';

import { Connection } from 'lib/graphql';
import { ProductFragment, productFragment } from 'lib/shopify/product';

export const cartFragment = /* GraphQL */ `
  fragment cart on Cart {
    id
    checkoutUrl
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              selectedOptions {
                name
                value
              }
              product {
                ...product
              }
            }
          }
        }
      }
    }
    totalQuantity
  }
  ${productFragment}
`;

export type CartLineFragment = Pick<CartLine, 'id' | 'quantity'> & {
  cost: Pick<CartLineCost, 'totalAmount'>;
  merchandise: Pick<ProductVariant, 'id' | 'title' | 'selectedOptions'> & {
    product: ProductFragment;
  };
};

export type CartFragment = Pick<Cart, 'id' | 'checkoutUrl' | 'cost' | 'lines' | 'totalQuantity'> & {
  cost: Pick<CartCost, 'subtotalAmount' | 'totalAmount' | 'totalTaxAmount'>;
  lines: Connection<CartLineFragment>;
};
