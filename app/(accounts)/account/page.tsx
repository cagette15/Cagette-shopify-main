import { getShopifyToken } from 'lib/next/session';
import { getCustomer } from 'lib/shopify';
import { redirect } from 'next/navigation';

import CustomerAccountDetails from './customer-account-details';

export default async function AccountPage() {
  const accessToken = getShopifyToken();

  if (!accessToken) {
    redirect('/signin');
  }

  const customerInfo = await getCustomer(accessToken);

  if (!customerInfo) {
    localStorage.setItem('userData', '');
    redirect('/');
  }

  return (
    <main>
      {/* <AccountUpdateForm customerInfo={customerInfo!} /> */}
      <CustomerAccountDetails customerInfos={customerInfo!} />
      {/*<h1>server side</h1>
      <pre title="debug">
        <code>{JSON.stringify({ customerInfos }, null, 2)}</code>
      </pre>

      <h1>client side</h1>
      <CustomerUpdateForm customerInfos={customerInfos!} />*/}
    </main>
  );
}
