import { getShopifyToken } from 'lib/next/session';
import { redirect } from 'next/navigation';
import SignIn from './customer-sign';

export default function SignInPage() {
  const accessToken = getShopifyToken();

  if (accessToken) {
    redirect('/account');
  }

  return (
    <main>
      <SignIn />
    </main>
  );
}
