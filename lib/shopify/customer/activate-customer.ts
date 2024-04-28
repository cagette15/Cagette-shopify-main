import type {
  CustomerAccessToken,
  CustomerActivateInput,
  CustomerUserError
} from '@shopify/hydrogen-react/storefront-api-types';

import { shopifyFetch } from 'lib/shopify';
import { CustomerFragment, customerFragment } from './fragments';

const QUERY = /* GraphQL */ `
  mutation customerActivate($id: ID!, $input: CustomerActivateInput!) {
    customerActivate(id: $id, input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customer {
        ...customer
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
  ${customerFragment}
`;

type Variables = {
  id: string;
  input: CustomerActivateInput;
};

type Returns = {
  customerCreate: {
    customerUserErrors: Array<CustomerUserError>;
    customerAccessToken: CustomerAccessToken;
    customer: CustomerFragment;
  };
};

export async function activateCustomer(
  customerId: string,
  activationToken: string,
  password: string
) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      id: customerId,
      input: {
        activationToken,
        password
      }
    }
  });

  return res.body.data.customerCreate;
}
