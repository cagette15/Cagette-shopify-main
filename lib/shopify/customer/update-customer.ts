import type {
  CustomerUpdateInput,
  CustomerUserError
} from '@shopify/hydrogen-react/storefront-api-types';

import { shopifyFetch } from 'lib/shopify';

import { CustomerFragment, customerFragment } from './fragments';

const QUERY = /* GraphQL */ `
  mutation customerUpdate($customer: CustomerUpdateInput!, $customerAccessToken: String!) {
    customerUpdate(customer: $customer, customerAccessToken: $customerAccessToken) {
      customer {
        ...customer
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
  ${customerFragment}
`;

type Variables = {
  customerAccessToken: string;
  customer: CustomerUpdateInput;
};

type Returns = {
  customerUpdate: {
    customer: CustomerFragment;
    customerUserErrors: CustomerUserError[];
  };
};

export async function updateCustomer(customerAccessToken: string, customer: CustomerUpdateInput) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      customerAccessToken,
      customer
    },
    cache: 'no-store'
  });

  return res.body.data.customerUpdate;
}
