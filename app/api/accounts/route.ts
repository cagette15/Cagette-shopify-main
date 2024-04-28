import { updateCustomer } from 'lib/shopify';

import { ApiResponse, endpoint } from 'lib/next/endpoint';
import { getShopifyToken } from 'lib/next/session';

export type UpdateCustomerEndpoint = ApiResponse<typeof PUT>;

export const PUT = endpoint(async (req) => {
  const shopifyToken = getShopifyToken();

  if (!shopifyToken) {
    return {
      success: false,
      errors: [{ message: 'unauthorized' }],
      status: 401
    };
  }

  const data = await req.json();

  const { customer, customerUserErrors } = await updateCustomer(shopifyToken, data);

  if (customerUserErrors.length) {
    return {
      success: false,
      errors: customerUserErrors
    };
  }

  return {
    success: true,
    data: { customer }
  };
});
