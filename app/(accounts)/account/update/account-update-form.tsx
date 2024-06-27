'use client';
import type { CustomerFragment } from 'lib/shopify';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormValues {
  acceptsMarketing: boolean;
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string | null;
}

interface AccountUpdateFormProps {
  customerInfo: CustomerFragment;
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

const validatePhoneNumber = (phone?: string | null): boolean => {
  if (phone) {
    const regex = /^\+\d{1,3}[\d\s-]*$/;
    return regex.test(phone);
  }

  return true;
};

const AccountUpdateForm: React.FC<AccountUpdateFormProps> = (props) => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    mode: 'onChange'
  });
  const router = useRouter();
  const { customerInfo } = props;
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    const res = await fetch('/api/accounts', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        phone: data?.phone === '' ? null : data?.phone,
        acceptsMarketing: data?.acceptsMarketing
      })
    });

    // Check the response and show appropriate message
    if (res.ok) {
      setSuccessMessage('Form submitted successfully!');
      router.push('/account');
    } else {
      if (res?.status === 400) {
        const data = await res?.json();
        if (data?.errors && data?.errors?.length > 0) {
          setErrorMessage(data?.errors[0]?.message);
        }
      } else {
        setErrorMessage('Form submission failed. Please try again.');
      }
    }

    // Clear the message after 3 seconds
    setTimeout(() => {
      setSuccessMessage(null);
      setErrorMessage(null);
    }, 3000);
  };

  useEffect(() => {
    setValue('firstName', customerInfo?.firstName ?? '');
    setValue('lastName', customerInfo?.lastName ?? '');
    setValue('email', customerInfo?.email ?? '');
    setValue('phone', customerInfo?.phone ?? '');
    setValue('acceptsMarketing', customerInfo?.acceptsMarketing ?? '');
  }, [customerInfo]);

  return (
    <form className="mx-auto mt-[70px] max-w-sm p-[20px]" onSubmit={handleSubmit(onSubmit)}>
      {successMessage && (
        <div className="mb-4 rounded bg-green-200 p-[13px] text-green-800">{successMessage}</div>
      )}
      {errorMessage && (
        <div className="mb-4 rounded bg-red-200 p-[13px] text-red-800">{errorMessage}</div>
      )}

      <div className="mb-4">
        <label className="mb-2 block font-bold" htmlFor="firstName">
          First Name
        </label>
        <input
          className="w-full rounded border border-gray-300 px-3 py-2 focus:border-[#95112c] focus:outline-none"
          type="text"
          id="firstName"
          {...register('firstName', { required: 'Please enter first name!' })}
        />
        {errors?.firstName && (
          <p className="mt-1 text-xs text-red-500">{errors?.firstName?.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="mb-2 block font-bold" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="w-full rounded border border-gray-300 px-3 py-2 focus:border-[#95112c] focus:outline-none"
          type="text"
          id="lastName"
          {...register('lastName', { required: 'Please enter last name!' })}
        />
        {errors?.lastName && (
          <p className="mt-1 text-xs text-red-500">{errors?.lastName?.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="mb-2 block font-bold" htmlFor="email">
          Email
        </label>
        <input
          className="w-full rounded border border-gray-300 px-3 py-2 focus:border-[#95112c] focus:outline-none"
          type="email"
          id="email"
          {...register('email', {
            required: 'Please enter email address!',
            validate(value) {
              if (value && !validateEmail(value)) {
                return 'Please enter a valid email address!';
              }
              return true;
            }
          })}
        />
        {errors?.email && <p className="mt-1 text-xs text-red-500">{errors?.email?.message}</p>}
      </div>
      <div className="mb-4">
        <label className="mb-2 block font-bold" htmlFor="phone">
          Phone
        </label>
        <input
          className="w-full rounded border border-gray-300 px-3 py-2 focus:border-[#95112c] focus:outline-none"
          type="text"
          id="phone"
          {...register('phone', {
            validate(value) {
              if (value && !validatePhoneNumber(value)) {
                return 'Please enter a valid phone!';
              }
              return true;
            }
          })}
        />
        {errors?.phone && <p className="mt-1 text-xs text-red-500">{errors?.phone?.message}</p>}
      </div>
      <div className="mb-4">
        <input
          className="mr-2 leading-tight"
          type="checkbox"
          id="acceptsMarketing"
          {...register('acceptsMarketing')}
        />
        <label htmlFor="acceptsMarketing">Accept Marketing</label>
      </div>
      <button
        className="focus:ring--[#95112c] mb-2 mr-2 w-full rounded-full bg-second px-5 py-2.5 text-center text-base font-medium text-white hover:bg-[#95112c] focus:outline-none focus:ring-4 md:py-4"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default AccountUpdateForm;
