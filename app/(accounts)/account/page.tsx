import { getShopifyToken } from 'lib/next/session';
import { getCustomer } from 'lib/shopify';
import { redirect } from 'next/navigation';
import AccountUpdateForm from './account-update-form';

import CustomerUpdateForm from './update-form';

export default async function AccountPage() {
  const accessToken = getShopifyToken();

  if (!accessToken) {
    redirect('/signin');
  }

  const customerInfo = await getCustomer(accessToken);

  return (
    <main>
      <AccountUpdateForm customerInfo={customerInfo!} />
      {/*<h1>server side</h1>
      <pre title="debug">
        <code>{JSON.stringify({ customerInfos }, null, 2)}</code>
      </pre>

      <h1>client side</h1>
      <CustomerUpdateForm customerInfos={customerInfos!} />*/}
    </main>
  );
}
