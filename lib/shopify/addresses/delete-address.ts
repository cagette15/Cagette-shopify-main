// DOC: https://shopify.dev/docs/api/storefront/2023-04/mutations/customerAddressDelete
import { shopifyFetch } from 'lib/shopify';

import { CustomerUserError } from '@shopify/hydrogen-react/storefront-api-types';
import { shopifyId } from 'lib/shopify/utils';

const QUERY = /* GraphQL */ `
  mutation deleteAddress($customerAccessToken: String!, $id: ID!) {
    customerAddressDelete(customerAccessToken: $customerAccessToken, id: $id) {
      customerUserErrors {
        code
        field
        message
      }
      deletedCustomerAddressId
    }
  }
`;

type Variables = {
  customerAccessToken: string;
  id: string;
};

type Returns = {
  customerAddressDelete: {
    deletedCustomerAddressId?: string;
    customerUserErrors: CustomerUserError[];
  };
};

export async function deleteAddress(customerAccessToken: string, addressId: string) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      customerAccessToken,
      id: shopifyId('MailingAddress', addressId, customerAccessToken)
    },
    cache: 'no-store'
  });

  return res.body.data.customerAddressDelete;
}
