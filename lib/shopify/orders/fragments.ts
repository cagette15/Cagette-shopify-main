import {
  Fulfillment,
  Order,
  OrderLineItem,
  ProductVariant
} from '@shopify/hydrogen-react/storefront-api-types';
import { Connection } from 'lib/graphql';
import { MailingAddressFragment, mailingAddressFragment } from '../addresses';

export const orderLineItemFragment = /* GraphQL */ `
  fragment orderLineItem on OrderLineItem {
    currentQuantity
    discountedTotalPrice {
      amount
      currencyCode
    }
    originalTotalPrice {
      amount
      currencyCode
    }
    quantity
    title
    variant {
      id
      title
      availableForSale
      selectedOptions {
        name
        value
      }
      price {
        amount
        currencyCode
      }
    }
  }
`;

export type OrderLineItemFragment = Pick<
  OrderLineItem,
  'currentQuantity' | 'discountedTotalPrice' | 'originalTotalPrice' | 'quantity' | 'title'
> & {
  variant: Pick<
    ProductVariant,
    'id' | 'title' | 'availableForSale' | 'selectedOptions' | 'price'
  > | null;
};

export const orderFragment = /* GraphQL */ `
  fragment order on Order {
    cancelReason
    canceledAt
    currencyCode
    currentSubtotalPrice {
      amount
      currencyCode
    }
    currentTotalDuties {
      amount
      currencyCode
    }
    currentTotalPrice {
      amount
      currencyCode
    }
    currentTotalTax {
      amount
      currencyCode
    }
    customerUrl
    edited
    email
    financialStatus
    fulfillmentStatus
    id
    name
    orderNumber
    phone
    processedAt
    shippingAddress {
      ...mailingAddress
    }
    statusUrl
    subtotalPrice {
      amount
      currencyCode
    }
    successfulFulfillments(first: 250) {
      trackingCompany
      trackingInfo(first: 250) {
        number
        url
      }
    }
    totalPrice {
      amount
      currencyCode
    }
    totalRefunded {
      amount
      currencyCode
    }
    totalShippingPrice {
      amount
      currencyCode
    }
    totalTax {
      amount
      currencyCode
    }

    lineItems(first: 250) {
      edges {
        node {
          ...orderLineItem
        }
      }
    }
  }
  ${mailingAddressFragment}
  ${orderLineItemFragment}
`;

export type OrderFragment = Pick<
  Order,
  | 'cancelReason'
  | 'canceledAt'
  | 'currencyCode'
  | 'currentSubtotalPrice'
  | 'currentTotalDuties'
  | 'currentTotalPrice'
  | 'currentTotalTax'
  | 'customerUrl'
  | 'edited'
  | 'email'
  | 'financialStatus'
  | 'fulfillmentStatus'
  | 'id'
  | 'name'
  | 'orderNumber'
  | 'phone'
  | 'processedAt'
  | 'statusUrl'
  | 'subtotalPrice'
  | 'totalPrice'
  | 'totalRefunded'
  | 'totalShippingPrice'
  | 'totalTax'
> & {
  lineItems: Connection<OrderLineItemFragment>;
  shippingAddress: MailingAddressFragment;
  successfulFulfillments: Pick<Fulfillment, 'trackingCompany' | 'trackingInfo'>;
};
