import { shopifyFetch } from 'lib/shopify';

import type { CustomerAccessTokenRenewPayload } from '@shopify/hydrogen-react/storefront-api-types';

const QUERY = /* GraphQL */ `
  mutation customerAccessTokenRenew($customerAccessToken: String!) {
    customerAccessTokenRenew(customerAccessToken: $customerAccessToken) {
      userErrors {
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
  customerAccessToken: string;
};

type Returns = CustomerAccessTokenRenewPayload;

export async function renewCustomerAccessToken(customerAccessToken: string) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      customerAccessToken
    }
  });

  return res.body.data;
}
