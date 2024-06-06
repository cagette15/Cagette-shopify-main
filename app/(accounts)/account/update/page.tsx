import { getShopifyToken } from 'lib/next/session';
import { getCustomer } from 'lib/shopify';
import { redirect } from 'next/navigation';

import AccountUpdateForm from './account-update-form';

export default async function AccountUpdatePage() {
  const accessToken = getShopifyToken();

  if (!accessToken) {
    redirect('/signin');
  }

  const customerInfo = await getCustomer(accessToken);

  return (
    <main>
      <AccountUpdateForm customerInfo={customerInfo!} />
    </main>
  );
}
