// DOC: https://shopify.dev/docs/api/storefront/2023-04/queries/customer
import { shopifyFetch } from 'lib/shopify';

import { Connection, removeEdgesAndNodes } from 'lib/graphql';
import { replaceId, replaceIds } from 'lib/shopify/utils';
import { MailingAddressFragment, mailingAddressFragment } from './fragments';

const QUERY = /* GraphQL */ `
  query getAddresses($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      defaultAddress {
        ...mailingAddress
      }
      addresses(first: 250) {
        edges {
          node {
            ...mailingAddress
          }
        }
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
    defaultAddress: MailingAddressFragment;
    addresses: Connection<MailingAddressFragment>;
  };
};

export async function getAddresses(customerAccessToken: string) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: { customerAccessToken },
    cache: 'no-store'
  });

  const { addresses, defaultAddress } = res.body.data.customer;

  return {
    addresses: replaceIds(removeEdgesAndNodes(addresses)) ?? [],
    defaultAddress: defaultAddress ? replaceId(defaultAddress) : null
  };
}
