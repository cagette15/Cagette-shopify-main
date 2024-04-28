'use client';

import type { UpdateCustomerEndpoint } from 'app/api/accounts/route';
import { submit } from 'lib/react/submit';
import type { CustomerFragment } from 'lib/shopify';
import { FormEvent, useState } from 'react';

type CustomerUpdateFormProps = {
  customerInfos: CustomerFragment;
};

export default function CustomerUpdateForm({ customerInfos }: CustomerUpdateFormProps) {
  const [userInfos, setUserInfos] = useState<CustomerFragment>(customerInfos);

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const res = await submit<UpdateCustomerEndpoint>(ev.currentTarget);

    if (res.success) {
      setUserInfos(res.data.customer);
    } else {
      console.log(res.errors);
    }
  }

  return (
    <>
      <pre title="debug">
        <code>{JSON.stringify({ userInfos }, null, 2)}</code>
      </pre>
      <form method="PUT" action="/api/accounts" onSubmit={onSubmit}>
        <label htmlFor="firstName">first name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          defaultValue={customerInfos!.firstName ?? ''}
        />
        <button type="submit">Update my account</button>
      </form>
    </>
  );
}
