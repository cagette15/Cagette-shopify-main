import { ApiResponse, endpoint } from 'lib/next/endpoint';
import { shopifyTokenHeader } from 'lib/next/session';

import { createCustomerAccessToken } from 'lib/shopify/customer';

export type SigninApiEndpoint = ApiResponse<typeof POST>;

export const POST = endpoint(async (req) => {
  const { email, password } = await req.json();

  const { customerAccessToken, customerUserErrors } = await createCustomerAccessToken(
    email,
    password
  );

  if (customerUserErrors.length) {
    return { success: false, errors: customerUserErrors };
  }

  return {
    success: true,
    data: 'ok',
    headers: shopifyTokenHeader(customerAccessToken!)
  };
});
