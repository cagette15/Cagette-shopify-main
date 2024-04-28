import { ApiResponse, endpoint } from 'lib/next/endpoint';
import { resetCustomerPasswordByToken } from 'lib/shopify';

export type ResetPasswordEndpoint = ApiResponse<typeof POST>;

export const POST = endpoint(async (req) => {
  const { customerId, password, urlToken } = await req.json();

  const res = await resetCustomerPasswordByToken(customerId, password, urlToken);

  if (res.customerUserErrors.length) {
    return {
      success: false,
      errors: res.customerUserErrors
    };
  }

  return {
    success: true,
    data: 'ok'
  };
});
