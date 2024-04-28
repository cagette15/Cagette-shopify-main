// DOC: https://shopify.dev/docs/api/storefront/2023-04/queries/customer
import { Connection, removeEdgesAndNodes } from 'lib/graphql';
import { PageInfo, shopifyFetch } from 'lib/shopify';

import { OrderFragment, orderFragment } from './fragments';
import { ITEMS_PER_PAGE, reshapeOrders } from './utils';

const QUERY = /* GraphQL */ `
  query getOrdersForward($customerAccessToken: String!, $first: Int, $after: String) {
    customer(customerAccessToken: $customerAccessToken) {
      orders(first: $first, after: $after) {
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
  first?: number;
  after?: string;
};

type Returns = {
  customer: {
    orders: Connection<OrderFragment> & {
      pageInfo: PageInfo;
    };
  };
};

export async function getOrdersNext(
  customerAccessToken: string,
  after?: string,
  limit = ITEMS_PER_PAGE
) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      customerAccessToken,
      first: limit,
      after
    },
    cache: 'no-store'
  });

  const orders = removeEdgesAndNodes(res.body.data.customer.orders);

  return {
    orders: reshapeOrders(orders),
    pageInfo: res.body.data.customer.orders.pageInfo
  };
}
