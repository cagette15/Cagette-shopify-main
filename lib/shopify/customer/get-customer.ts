import { shopifyFetch } from 'lib/shopify';

import { CustomerFragment, customerFragment } from './fragments';

const QUERY = /* GraphQL */ `
  query getCustomer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      ...customer
    }
  }
  ${customerFragment}
`;

type Variables = {
  customerAccessToken: string;
};

type Returns = {
  customer: CustomerFragment;
};

export async function getCustomer(customerAccessToken: string) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: { customerAccessToken },
    cache: 'no-store'
  });

  if (!res.body.data.customer) {
    return null;
  }

  return res.body.data.customer;
}
