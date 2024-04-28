import { ApiResponse, endpoint } from 'lib/next/endpoint';
import { getShopifyToken } from 'lib/next/session';
import { createAddress, getAddresses } from 'lib/shopify/addresses';

export const GET = endpoint(async () => {
  const accessToken = getShopifyToken();

  if (!accessToken) {
    return {
      success: false,
      errors: [{ message: 'unauthorized' }],
      status: 401
    };
  }

  const data = await getAddresses(accessToken);
  return { success: true, data };
});

export type CreateAddressEndpoint = ApiResponse<typeof POST>;

export const POST = endpoint(async (req) => {
  const accessToken = getShopifyToken();

  if (!accessToken) {
    return {
      success: false,
      errors: [{ message: 'unauthorized' }],
      status: 401
    };
  }

  const { firstName, lastName, company, address1, address2, zip, city, province, country, phone } =
    await req.json();

  const { customerUserErrors, customerAddress } = await createAddress(accessToken, {
    firstName,
    lastName,
    company,
    address1,
    address2,
    zip,
    city,
    province,
    country,
    phone
  });

  if (customerUserErrors.length) {
    return { success: false, errors: customerUserErrors };
  }

  return { success: true, data: customerAddress };
});
