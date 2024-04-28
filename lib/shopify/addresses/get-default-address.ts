// DOC: https://shopify.dev/docs/api/storefront/2023-04/queries/customer
import { shopifyFetch } from 'lib/shopify';

import { replaceId } from '../utils';
import { MailingAddressFragment, mailingAddressFragment } from './fragments';

const QUERY = /* GraphQL */ `
  query getDefaultAddress($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      defaultAddress {
        ...mailingAddress
      }
    }
  }
  ${mailingAddressFragment}
`;

type Variables = {
  customerAccessToken: string;
};

type Returns = {
  customer: {
    defaultAddress: MailingAddressFragment | null;
  };
};

export async function getDefaultAddress(customerAccessToken: string) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: { customerAccessToken },
    cache: 'no-store'
  });

  if (res.body.data.customer.defaultAddress) {
    replaceId(res.body.data.customer.defaultAddress);
  }

  return res.body.data.customer.defaultAddress;
}
