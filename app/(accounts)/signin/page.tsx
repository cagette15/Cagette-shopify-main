import { getShopifyToken } from 'lib/next/session';
import { redirect } from 'next/navigation';

import Signin from './customer-sign';

export default async function SigninPage() {
  const accessToken = getShopifyToken();

  if (accessToken) {
    redirect('/account');
  }

  return (
    <main>
      <Signin />
    </main>
  );
}
