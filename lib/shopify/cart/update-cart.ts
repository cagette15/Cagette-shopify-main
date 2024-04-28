import { shopifyFetch } from 'lib/shopify';

import { CartFragment, cartFragment } from './fragments';
import { reshapeCart } from './utils';

const QUERY = /* GraphQL */ `
  mutation editCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;

type Variables = {
  cartId: string;
  lines: {
    id: string;
    merchandiseId: string;
    quantity: number;
  }[];
};

type Returns = {
  cartLinesUpdate: {
    cart: CartFragment;
  };
};

export async function updateCart(cartId: string, lines: Variables['lines']) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      cartId,
      lines
    },
    cache: 'no-store'
  });

  return reshapeCart(res.body.data.cartLinesUpdate.cart);
}
