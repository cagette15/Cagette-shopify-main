import { removeEdgesAndNodes } from 'lib/graphql';
import { replaceId } from '../utils';
import { OrderFragment } from './fragments';

export const ITEMS_PER_PAGE = 10;

export const reshapeOrders = (orders: OrderFragment[]) => {
  return orders.map(reshapeOrder);
};

export const reshapeOrder = (order: OrderFragment) => {
  replaceId(order);

  const lineItems = removeEdgesAndNodes(order.lineItems);

  lineItems.forEach((lineItem) => {
    if (lineItem.variant) {
      replaceId(lineItem.variant);
    }
  });

  return {
    ...order,
    lineItems
  };
};

export type SimpleOrder = NonNullable<ReturnType<typeof reshapeOrder>>;
