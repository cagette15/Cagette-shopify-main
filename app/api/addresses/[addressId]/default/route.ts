import { endpoint } from 'lib/next/endpoint';
import { getShopifyToken } from 'lib/next/session';
import { setDefaultAddress } from 'lib/shopify/addresses';

export const POST = endpoint(async (req, { params }) => {
  const accessToken = getShopifyToken();

  if (!accessToken) {
    return {
      success: false,
      errors: [{ message: 'unauthorized' }],
      status: 401
    };
  }

  const { customerUserErrors } = await setDefaultAddress(accessToken, params.addressId!);

  if (customerUserErrors.length) {
    return { success: false, errors: customerUserErrors };
  }

  return { success: true, data: '' };
});
