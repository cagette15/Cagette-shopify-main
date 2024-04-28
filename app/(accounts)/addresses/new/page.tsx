// DOC: https://shopify.dev/docs/themes/architecture/templates/customers-addresses

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import Field from 'components/form/field';
import { submit } from 'lib/react/submit';
import { useRouter } from 'next/navigation';

import type { CreateAddressEndpoint } from 'app/api/addresses/route';

const createAddressSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  company: z.string().optional(),
  address1: z.string(),
  address2: z.string().optional(),
  zip: z.string().regex(/^[0-9]+$/),
  city: z.string(),
  province: z.string().optional(),
  country: z.string(),
  phone: z
    .string()
    .regex(/^\+[0-9]{11}$/)
    .optional()
});

type CreateAddressSchema = z.infer<typeof createAddressSchema>;

export default function CustomerNewAddressPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateAddressSchema>({
    resolver: zodResolver(createAddressSchema)
  });

  const onSubmit: SubmitHandler<CreateAddressSchema> = async (data, ev) => {
    ev?.preventDefault();
    const res = await submit<CreateAddressEndpoint>(ev!.target);

    if (res.success) {
      router.push('/addresses');
    } else {
      // TODO: show server errors
      console.log(res.errors);
    }
  };

  return (
    <main>
      <h1>Create a new address</h1>
      <form method="POST" action="/api/addresses" onSubmit={handleSubmit(onSubmit)}>
        <Field label="First name:" errorMessage={errors.firstName?.message}>
          <input type="text" {...register('firstName')} />
        </Field>

        <Field label="Last name:" errorMessage={errors.lastName?.message}>
          <input type="text" {...register('lastName')} />
        </Field>

        <Field label="Company:" errorMessage={errors.company?.message}>
          <input type="text" {...register('company')} />
        </Field>

        <Field label="Address:" errorMessage={errors.address1?.message}>
          <input type="text" {...register('address1')} />
        </Field>

        <Field errorMessage={errors.address2?.message}>
          <input type="text" {...register('address2')} />
        </Field>

        <Field label="Zipcode:" errorMessage={errors.zip?.message}>
          <input type="text" {...register('zip')} />
        </Field>

        <Field label="City:" errorMessage={errors.city?.message}>
          <input type="text" {...register('city')} />
        </Field>

        <Field label="Province:" errorMessage={errors.province?.message}>
          <input type="text" {...register('province')} />
        </Field>

        <Field label="Country:" errorMessage={errors.country?.message}>
          <input type="text" {...register('country')} />
        </Field>

        <Field label="Phone:" errorMessage={errors.phone?.message}>
          <input type="text" {...register('phone')} />
        </Field>

        <button type="submit">Save</button>
      </form>
    </main>
  );
}
