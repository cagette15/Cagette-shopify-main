// DOC: https://shopify.dev/docs/themes/architecture/templates/customers-addresses

import { getShopifyToken } from 'lib/next/session';
import { getAddress } from 'lib/shopify/addresses';
import { notFound } from 'next/navigation';

import DeleteAddressForm from './delete-form';
import SetDefaultAddressForm from './set-default-form';
import UpdateAddressForm from './update-form';

type CustomerAddressPageProps = {
  params: {
    addressId: string;
  };
};

export default async function CustomerAddressPage({ params }: CustomerAddressPageProps) {
  const accessToken = getShopifyToken();

  if (!accessToken) {
    notFound();
  }

  const address = await getAddress(accessToken, params.addressId);

  if (!address) {
    notFound();
  }

  return (
    <main>
      <h1>Update this address</h1>
      <UpdateAddressForm address={address} />
      <SetDefaultAddressForm address={address} />
      <DeleteAddressForm address={address} />
    </main>
  );
}
