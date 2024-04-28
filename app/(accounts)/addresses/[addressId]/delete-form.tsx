'use client';

import { submit } from 'lib/react/submit';
import { MailingAddressFragment } from 'lib/shopify/addresses';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

type DeleteAddressFormProps = {
  address: MailingAddressFragment;
};

export default function DeleteAddressForm({ address }: DeleteAddressFormProps) {
  const router = useRouter();
  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const res = await submit(ev.currentTarget);

    if (res.success) {
      router.back();
    }
  }

  return (
    <form method="delete" action={`/api/addresses/${address.id}`} onSubmit={onSubmit}>
      <button type="submit">Delete this address</button>
    </form>
  );
}
