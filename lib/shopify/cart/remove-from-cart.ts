import { shopifyFetch } from 'lib/shopify';

import { CartFragment, cartFragment } from './fragments';
import { reshapeCart } from './utils';

const QUERY = /* GraphQL */ `
  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;

type Variables = {
  cartId: string;
  lineIds: string[];
};

type Returns = {
  cartLinesRemove: {
    cart: CartFragment;
  };
};

export async function removeFromCart(cartId: string, lineIds: string[]) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      cartId,
      lineIds
    },
    cache: 'no-store'
  });

  return reshapeCart(res.body.data.cartLinesRemove.cart);
}
