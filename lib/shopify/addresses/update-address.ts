// DOC: https://shopify.dev/docs/api/storefront/2023-04/mutations/customerAddressUpdate
import { shopifyFetch } from 'lib/shopify';

import { CustomerUserError } from '@shopify/hydrogen-react/storefront-api-types';
import { shopifyId } from 'lib/shopify/utils';
import { MailingAddressFragment, mailingAddressFragment } from './fragments';

const QUERY = /* GraphQL */ `
  mutation updateAddress($address: MailingAddressInput!, $customerAccessToken: String!, $id: ID!) {
    customerAddressUpdate(address: $address, customerAccessToken: $customerAccessToken, id: $id) {
      customerUserErrors {
        code
        field
        message
      }
      customerAddress {
        ...mailingAddress
      }
    }
  }
  ${mailingAddressFragment}
`;

type Variables = {
  customerAccessToken: string;
  id: string;
  address: {
    address1?: string;
    address2?: string;
    city?: string;
    company?: string;
    country?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    province?: string;
    zip?: string;
  };
};

type Returns = {
  customerAddressUpdate: {
    customerAddress?: MailingAddressFragment;
    customerUserErrors: CustomerUserError[];
  };
};

export async function updateAddress(
  customerAccessToken: string,
  addressId: string,
  mailingAddress: Variables['address']
) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      customerAccessToken,
      id: shopifyId('MailingAddress', addressId, customerAccessToken),
      address: mailingAddress
    },
    cache: 'no-store'
  });

  return res.body.data.customerAddressUpdate;
}
