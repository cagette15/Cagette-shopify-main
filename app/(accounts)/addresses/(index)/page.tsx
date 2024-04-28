// DOC: https://shopify.dev/docs/themes/architecture/templates/customers-addresses

import { getShopifyToken } from 'lib/next/session';
import { getAddresses } from 'lib/shopify/addresses';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function CustomerAddressesPage() {
  const accessToken = getShopifyToken();

  if (!accessToken) {
    notFound();
  }

  const { defaultAddress, addresses } = await getAddresses(accessToken);

  return (
    <main>

      <h1>My addresses</h1>
      {addresses.length === 0 && <p>You dont have any addresses registered.</p>}
      <Link href="/addresses/new">Add a new address</Link>
      {addresses.length > 0 && (
        <ul>
          {addresses.map((address) => (
            <li key={address.id}>
              <p>
                {address.firstName} {address.lastName}
              </p>
              {!!address.company.length && <p>{address.company}</p>}
              <p>{address.address1}</p>
              {!!address.address2.length && <p>{address.address2}</p>}
              <p>
                {address.zip} {address.city}
              </p>
              {!!address.province.length && <p>{address.province}</p>}
              <p>{address.country}</p>
              {!!address.phone.length && <p>{address.phone}</p>}
              {address.id === defaultAddress?.id && <p>DEFAULT ADDRESS</p>}
              <p>
                <Link href={`/addresses/${address.id}`}>Edit this address</Link>
              </p>
            </li>
          ))}
        </ul>
      )}

    </main>
  );
}
