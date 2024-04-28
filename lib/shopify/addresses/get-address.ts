import { getAddresses } from './get-addresses';

export async function getAddress(customerAccessToken: string, addressId: string) {
  const { addresses } = await getAddresses(customerAccessToken);
  return addresses.find((address) => address.id === addressId);
}
