import { shopifyFetch } from 'lib/shopify';

import { CartFragment, cartFragment } from './fragments';
import { reshapeCart } from './utils';

const QUERY = /* GraphQL */ `
  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
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
    merchandiseId: string;
    quantity: number;
  }[];
};

type Returns = {
  cartLinesAdd: {
    cart: CartFragment;
  };
};

export async function addToCart(cartId: string, lines: Variables['lines']) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      cartId,
      lines
    },
    cache: 'no-store'
  });

  return reshapeCart(res.body.data.cartLinesAdd.cart);
}
