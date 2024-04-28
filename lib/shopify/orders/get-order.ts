import { getOrdersNext } from './get-orders-next';

export async function getOrder(customerAccessToken: string, orderId: string) {
  let cursor;

  while (true) {
    const { orders, pageInfo } = await getOrdersNext(customerAccessToken, cursor, 100);
    const found = orders.find((order) => order.id === orderId);

    if (found) {
      return found;
    } else if (!pageInfo.hasNextPage) {
      return null;
    } else {
      cursor = pageInfo.endCursor;
    }
  }
}
