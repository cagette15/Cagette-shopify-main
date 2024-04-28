import { shopifyFetch } from 'lib/shopify';

import { CartFragment, cartFragment } from './fragments';
import { reshapeCart } from './utils';

const QUERY = /* GraphQL */ `
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
  ${cartFragment}
`;

type Variables = {
  cartId: string;
};

type Returns = {
  cart: CartFragment;
};

export async function getCart(cartId: string) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: { cartId },
    cache: 'no-store'
  });

  if (!res.body.data.cart) {
    return null;
  }

  return reshapeCart(res.body.data.cart);
}
