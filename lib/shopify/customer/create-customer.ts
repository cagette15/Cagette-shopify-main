import type {
  CustomerCreateInput,
  CustomerUserError
} from '@shopify/hydrogen-react/storefront-api-types';

import { shopifyFetch } from 'lib/shopify';
import { CustomerFragment, customerFragment } from './fragments';

const QUERY = /* GraphQL */ `
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customer {
        ...customer
      }
    }
  }
  ${customerFragment}
`;

type Variables = {
  input: CustomerCreateInput;
};

type Returns = {
  customerCreate: {
    customerUserErrors: Array<CustomerUserError>;
    customer: CustomerFragment;
  };
};

export async function createCustomer(
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      input: {
        email,
        password,
        firstName,
        lastName
      }
    }
  });

  return res.body.data.customerCreate;
}
