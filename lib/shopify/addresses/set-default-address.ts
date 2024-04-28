// DOC: https://shopify.dev/docs/api/storefront/2023-04/mutations/customerDefaultAddressUpdate
import { shopifyFetch } from 'lib/shopify';

import { CustomerUserError } from '@shopify/hydrogen-react/storefront-api-types';
import { shopifyId } from 'lib/shopify/utils';

const QUERY = /* GraphQL */ `
  mutation setDefaultAddress($addressId: ID!, $customerAccessToken: String!) {
    customerDefaultAddressUpdate(addressId: $addressId, customerAccessToken: $customerAccessToken) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

type Variables = {
  customerAccessToken: string;
  addressId: string;
};

type Returns = {
  customerDefaultAddressUpdate: {
    customerUserErrors: CustomerUserError[];
  };
};

export async function setDefaultAddress(customerAccessToken: string, addressId: string) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      customerAccessToken,
      addressId: shopifyId('MailingAddress', addressId, customerAccessToken)
    },
    cache: 'no-store'
  });

  return {
    ...res.body.data.customerDefaultAddressUpdate
  };
}
