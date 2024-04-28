import { ApiResponse, endpoint } from 'lib/next/endpoint';
import { getShopifyToken } from 'lib/next/session';
import { deleteAddress, getAddress, updateAddress } from 'lib/shopify/addresses';

export const GET = endpoint(async () => {
  const accessToken = getShopifyToken();

  if (!accessToken) {
    return {
      success: false,
      errors: [{ message: 'unauthorized' }],
      status: 401
    };
  }

  const address = await getAddress(accessToken, '9261673316661');
  return { success: true, data: address };
});

export type UpdateAddressEndpoint = ApiResponse<typeof PUT>;

export const PUT = endpoint(async (req, { params }) => {
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

  const { customerUserErrors, ...data } = await updateAddress(accessToken, params.addressId!, {
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

  return { success: true, data };
});

export type DeleteAddressEndpoint = ApiResponse<typeof DELETE>;

export const DELETE = endpoint(async (req, { params }) => {
  const accessToken = getShopifyToken();

  if (!accessToken) {
    return {
      success: false,
      errors: [{ message: 'unauthorized' }],
      status: 401
    };
  }

  const { customerUserErrors, ...data } = await deleteAddress(accessToken, params.addressId!);

  if (customerUserErrors.length) {
    return { success: false, errors: customerUserErrors };
  }

  return { success: true, data };
});
