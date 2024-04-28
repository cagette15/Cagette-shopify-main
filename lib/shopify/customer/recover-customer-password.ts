import type { CustomerUserError } from '@shopify/hydrogen-react/storefront-api-types';

import { shopifyFetch } from 'lib/shopify';
import { buyerIpHeader } from '../utils';

const QUERY = /* GraphQL */ `
  mutation customerRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

type Variables = {
  email: string;
};

type Returns = {
  customerRecover: {
    customerUserErrors: CustomerUserError[];
  };
};

export async function recoverCustomerPassword(email: string, buyerIp: string | null) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      email
    },
    headers: {
      ...buyerIpHeader(buyerIp)
    }
  });

  return res.body.data.customerRecover;
}
