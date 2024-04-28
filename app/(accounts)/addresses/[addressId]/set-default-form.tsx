'use client';

import { submit } from 'lib/react/submit';
import { MailingAddressFragment } from 'lib/shopify/addresses';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

type SetDefaultAddressFormProps = {
  address: MailingAddressFragment;
};

export default function SetDefaultAddressForm({ address }: SetDefaultAddressFormProps) {
  const router = useRouter();
  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const res = await submit(ev.currentTarget);

    if (res.success) {
      router.back();
    }
  }

  return (
    <form method="post" action={`/api/addresses/${address.id}/default`} onSubmit={onSubmit}>
      <button type="submit">Choose this address as default</button>
    </form>
  );
}
