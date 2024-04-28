// DOC: https://shopify.dev/docs/api/storefront/2023-04/queries/customer
import { Connection, removeEdgesAndNodes } from 'lib/graphql';
import { PageInfo, shopifyFetch } from 'lib/shopify';

import { OrderFragment, orderFragment } from './fragments';
import { ITEMS_PER_PAGE, reshapeOrders } from './utils';

const QUERY = /* GraphQL */ `
  query getOrdersBackward($customerAccessToken: String!, $last: Int, $before: String) {
    customer(customerAccessToken: $customerAccessToken) {
      orders(last: $last, before: $before) {
        edges {
          node {
            ...order
          }
        }
        pageInfo {
          hasPreviousPage
          startCursor
          hasNextPage
          endCursor
        }
      }
    }
  }
  ${orderFragment}
`;

type Variables = {
  customerAccessToken: string;
  last?: number;
  before?: string;
};

type Returns = {
  customer: {
    orders: Connection<OrderFragment> & {
      pageInfo: PageInfo;
    };
  };
};

export async function getOrdersPrev(
  customerAccessToken: string,
  before?: string,
  limit = ITEMS_PER_PAGE
) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      customerAccessToken,
      last: limit,
      before
    },
    cache: 'no-store'
  });

  const orders = removeEdgesAndNodes(res.body.data.customer.orders);

  return {
    orders: reshapeOrders(orders),
    pageInfo: res.body.data.customer.orders.pageInfo
  };
}
