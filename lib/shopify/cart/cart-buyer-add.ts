import { shopifyFetch } from 'lib/shopify';
import { CartFragment } from './fragments';
import { reshapeCart } from './utils';

const QUERY = /* GraphQL */ `
  mutation updateCartBuyerIdentity($cartId: ID!, $buyerIdentity: CartBuyerIdentityInput!) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        id
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
        createdAt
        checkoutUrl
        buyerIdentity {
          customer {
            email
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
            }
          }
        }
      totalQuantity
      }
      userErrors {
        field
        message
      }
    }
  }
`;

type BuyerIdentity = {
  customerAccessToken: string;
};

type Variables = {
  cartId: string;
  buyerIdentity: BuyerIdentity;
};

type Returns = {
  cartLinesAdd: {
    cart: CartFragment;
  };
  cartBuyerIdentityUpdate: {
    cart: CartFragment;
  };
};

export async function updateCartBuyerIdentity(cartId: string, buyerIdentity: BuyerIdentity) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      cartId,
      buyerIdentity
    },
    cache: 'no-store'
  });

  if (res.body.data?.cartBuyerIdentityUpdate?.cart) {
    return reshapeCart(res.body.data.cartBuyerIdentityUpdate.cart);
  } else {
    throw new Error('Failed to update cart buyer identity');
  }
}
