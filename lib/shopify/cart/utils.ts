import { removeEdgesAndNodes } from 'lib/graphql';

import { CartFragment } from './fragments';

export const reshapeCart = (cart: CartFragment) => {
  if (!cart?.cost?.totalTaxAmount) {
    cart.cost.totalTaxAmount = {
      amount: '0.0',
      currencyCode: 'USD'
    };
  }

  return {
    ...cart,
    lines: removeEdgesAndNodes(cart?.lines)
  };
};

export type SimpleCart = ReturnType<typeof reshapeCart>;
