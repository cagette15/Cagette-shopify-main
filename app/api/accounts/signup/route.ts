import { createCustomer, createCustomerAccessToken } from 'lib/shopify';

import { ApiResponse, endpoint } from 'lib/next/endpoint';
import { shopifyTokenHeader } from 'lib/next/session';

export type SignupApiEndpoint = ApiResponse<typeof POST>;

export const POST = endpoint(async (req) => {
  const { email, password, firstName, lastName } = await req.json();

  try {
    const { customer, customerUserErrors } = await createCustomer(
      email,
      password,
      firstName,
      lastName
    );

    if (customerUserErrors.length) {
      return { success: false, errors: customerUserErrors };
    }

    const { customerAccessToken } = await createCustomerAccessToken(email, password);

    return {
      success: true,
      data: { customer },
      headers: shopifyTokenHeader(customerAccessToken!)
    };
  } catch (error) {
    if ((error as any).error) {
      return {
        success: false,
        errors: [(error as any).error as { message: string }]
      };
    }

    return { success: false, errors: [error as Error] };
  }
});
