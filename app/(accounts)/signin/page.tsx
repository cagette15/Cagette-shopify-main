'use client';

import type { SigninApiEndpoint } from 'app/api/accounts/signin/route';
import { submit } from 'lib/react/submit';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function SigninPage() {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>();
  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const res = await submit<SigninApiEndpoint>(ev.currentTarget);

    if (res.success) {
      router.push('/account');
    } else {
      console.log(res.errors);
      setError(res.errors[0]?.message || 'An error occurred');
    }
  }

  function clearError() {
    setError(undefined);
  }
  return (
    <section className="flex items-stretch text-white md:min-h-[90vh] ">
      <div
        className="relative hidden w-1/2 items-center bg-gray-500 bg-cover bg-no-repeat lg:flex"
        style={{
          backgroundImage:
            'url(https://cdn.shopify.com/s/files/1/0762/8763/9861/files/home-parallax-4.webp?v=1685354625)'
        }}
      >
        <div className="absolute inset-0 z-0 bg-black opacity-50"></div>
        <div className="z-10 w-full px-24">
          <h1 className="text-left text-5xl font-bold uppercase tracking-wide text-white">
            Cagette
          </h1>
          <p className="my-4 text-3xl">Canteen &amp; Deli</p>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4 p-4 text-center">
          <span>
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </span>
          <span>
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </span>
          <span>
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </span>
        </div>
      </div>
      <div className="z-0 flex w-full items-center justify-center bg-black/95 px-0 text-center md:bg-cagette md:px-16 lg:w-1/2">
        <div
          className="absolute inset-0 z-10 items-center bg-black/95 bg-cover bg-no-repeat lg:hidden"
          style={{
            backgroundImage:
              'url(https://cdn.shopify.com/s/files/1/0762/8763/9861/files/home-parallax-4.webp?v=1685354625)'
          }}
        >
          <div className="absolute inset-0 z-0 bg-black opacity-10"></div>
        </div>
        <div className="z-20 w-full py-6 pt-20 md:pt-0">
          <div className="mx-auto ">
            <Image
              src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/logo-main.png?v=1683873400"
              width={541}
              height={304}
              alt="cagette Logo"
              className="mx-auto h-32 w-auto"
            />
          </div>

          <form
            method="post"
            action="/api/accounts/signin"
            onSubmit={onSubmit}
            className="mx-auto w-full px-4  sm:w-2/3 lg:px-0"
          >
            <div className="pb-2 pt-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="block w-full rounded-sm bg-gray-200 p-4 text-lg text-gray-800"
                onFocus={clearError}
              />
            </div>
            <div className="pb-2 pt-4">
              <input
                className="block w-full rounded-sm bg-gray-200 p-4 text-lg text-gray-800"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onFocus={clearError}
              />
            </div>
            <div className="flex justify-between px-4 py-2  font-medium text-gray-100 hover:text-[#95112c] md:text-gray-600">
              <div>
                <Link href="/signup">Sign Up</Link>
              </div>
              <div>
                <Link href="/recover-password">Forgot password?</Link>
              </div>
            </div>
            <div className="px-4 pb-2 pt-4">
              <button
                className="focus:ring--[#95112c] mb-2 mr-2 w-full rounded-full bg-second px-5 py-2.5 text-center text-base font-medium text-white hover:bg-[#95112c] focus:outline-none focus:ring-4 md:py-4"
                type="submit"
              >
                sign in
              </button>
            </div>

            <div className="left-0 right-0 mt-16 flex justify-center space-x-4 p-4 text-center lg:hidden ">
              <a href="#">
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#">
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#">
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            {error && (
              <div className="mt-2 text-base font-medium uppercase text-[#95112c]">{error}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
