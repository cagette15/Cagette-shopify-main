import { ApiResponse, endpoint } from 'lib/next/endpoint';
import { recoverCustomerPassword } from 'lib/shopify/customer';
import { getClientIp } from 'request-ip';

export type RecoverPasswordEndpoint = ApiResponse<typeof POST>;

export const POST = endpoint(async (req) => {
  // @ts-expect-error (req type mismatch)
  const detectedIp = getClientIp(req as Request);

  const { email } = await req.json();

  const res = await recoverCustomerPassword(email, detectedIp);

  if (res.customerUserErrors.length) {
    return {
      success: false,
      errors: res.customerUserErrors
    };
  }

  return {
    success: true,
    data: ''
  };
});
