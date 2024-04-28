// DOC: https://shopify.dev/docs/api/storefront/2023-04/mutations/customerAddressCreate
import { shopifyFetch } from 'lib/shopify';

import { CustomerUserError } from '@shopify/hydrogen-react/storefront-api-types';
import { replaceId } from '../utils';
import { MailingAddressFragment, mailingAddressFragment } from './fragments';

const QUERY = /* GraphQL */ `
  mutation createAddress($address: MailingAddressInput!, $customerAccessToken: String!) {
    customerAddressCreate(address: $address, customerAccessToken: $customerAccessToken) {
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
  customerAddressCreate: {
    customerAddress?: MailingAddressFragment;
    customerUserErrors: CustomerUserError[];
  };
};

export async function createAddress(
  customerAccessToken: string,
  mailingAddress: Variables['address']
) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      customerAccessToken,
      address: mailingAddress
    },
    cache: 'no-store'
  });

  if (res.body.data.customerAddressCreate.customerAddress) {
    replaceId(res.body.data.customerAddressCreate.customerAddress);
  }

  return res.body.data.customerAddressCreate;
}
