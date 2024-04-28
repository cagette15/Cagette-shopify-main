import { shopifyFetch } from 'lib/shopify';

import { CartFragment, cartFragment } from './fragments';
import { reshapeCart } from './utils';

const QUERY = /* GraphQL */ `
  mutation createCart($lineItems: [CartLineInput!]) {
    cartCreate(input: { lines: $lineItems }) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;

type Returns = {
  cartCreate: {
    cart: CartFragment;
  };
};

export async function createCart() {
  const res = await shopifyFetch<Returns>({
    query: QUERY,
    cache: 'no-store'
  });

  return reshapeCart(res.body.data.cartCreate.cart);
}
