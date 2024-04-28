import { shopifyFetch } from 'lib/shopify';

import type {
  CustomerAccessTokenCreateInput,
  CustomerAccessTokenCreatePayload
} from '@shopify/hydrogen-react/storefront-api-types';

const QUERY = /* GraphQL */ `
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`;

type Variables = {
  input: CustomerAccessTokenCreateInput;
};

type Returns = {
  customerAccessTokenCreate: CustomerAccessTokenCreatePayload;
};

export async function createCustomerAccessToken(email: string, password: string) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      input: {
        email,
        password
      }
    }
  });

  return res.body.data.customerAccessTokenCreate;
}
