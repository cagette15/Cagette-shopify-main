'use client';

import type { CustomerFragment } from 'lib/shopify';
import Link from 'next/link';
import { useState } from 'react';

type CustomerUpdateFormProps = {
  customerInfos: CustomerFragment;
};

export default function CustomerAccountDetails({ customerInfos }: CustomerUpdateFormProps) {
  const [userInfos, setUserInfos] = useState<CustomerFragment>(customerInfos);

  return (
    <div className="mx-20">
      <div className="container mx-auto py-8">
        <h1 className="mb-4 text-2xl font-bold">Account</h1>
        <div className="flex justify-between">
          {' '}
          <Link href="/account/update">Update</Link>
          <Link href="/signout">Logout</Link>
        </div>
        <div key={userInfos.id} className="mb-4 rounded bg-gray-100 p-4 shadow">
          <h2 className="mb-2 text-xl font-bold">Account details</h2>
          <p className="mb-2">Name: {userInfos?.displayName}</p>
          <p className="mb-2">Email: {userInfos?.email}</p>
          {userInfos?.numberOfOrders === '0' ? (
            <p className="mb-2">You never made any orders, start now!</p>
          ) : (
            <p className="mb-2">
              Total Order: {userInfos?.numberOfOrders}
              <br />
              <Link href="/orders">Check Order history</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
