import { ApiResponse, endpoint } from 'lib/next/endpoint';
import { shopifyTokenHeader } from 'lib/next/session';
import { activateCustomer } from 'lib/shopify';

export type ActivateAccountApiEndpoint = ApiResponse<typeof POST>;

export const POST = endpoint(async (req) => {
  const { customerId, activationToken, password } = await req.json();

  const { customer, customerAccessToken, customerUserErrors } = await activateCustomer(
    customerId,
    activationToken,
    password
  );

  if (customerUserErrors.length) {
    return { success: false, errors: customerUserErrors };
  }

  return {
    success: true,
    data: { customer },
    headers: shopifyTokenHeader(customerAccessToken)
  };
});
