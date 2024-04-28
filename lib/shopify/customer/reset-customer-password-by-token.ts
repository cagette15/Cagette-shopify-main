import { CustomerUserError } from '@shopify/hydrogen-react/storefront-api-types';
import { shopifyFetch } from 'lib/shopify';
import { customerFragment, CustomerFragment } from './fragments';

const QUERY = /* GraphQL */ `
  mutation customerReset($id: ID!, $input: CustomerResetInput!) {
    customerReset(id: $id, input: $input) {
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
  id: string;
  input: {
    password: string;
    urlToken: string;
  };
};

type Returns = {
  customerReset: {
    customer: CustomerFragment;
    customerUserErrors: CustomerUserError[];
  };
};

export async function resetCustomerPasswordByToken(
  customerId: string,
  password: string,
  urlToken: string
) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      id: customerId,
      input: {
        password,
        urlToken
      }
    }
  });

  return res.body.data.customerReset;
}
