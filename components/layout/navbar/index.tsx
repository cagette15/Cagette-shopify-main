/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */

import { UsersIcon } from '@heroicons/react/24/outline';

import Cart from 'components/cart';
import CartIcon from 'components/icons/cart';
import { getMenu } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import FbIcon from 'components/icons/facebook';
import MobileMenu from './mobile-menu';
import Search from './search';
import SearchMenu from './search-menu';
export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-sub-menu');
  const images = [
    'https://cdn.shopify.com/s/files/1/0762/8763/9861/files/cheeses-60x60.png?v=1685432025',
    'https://cdn.shopify.com/s/files/1/0762/8763/9861/files/charcuterie-60x60.png?v=1685432025',
    'https://cdn.shopify.com/s/files/1/0762/8763/9861/files/seafood-60x60.png?v=1685432025',
    'https://cdn.shopify.com/s/files/1/0762/8763/9861/files/deli-60x60.png?v=1685432025',
    'https://cdn.shopify.com/s/files/1/0762/8763/9861/files/platters-60x60.png?v=1685432025',
    'https://cdn.shopify.com/s/files/1/0762/8763/9861/files/veggie-60x60.png?v=1685432025',
    'https://cdn.shopify.com/s/files/1/0762/8763/9861/files/butchery-60x60.png?v=1685432025',
    'https://cdn.shopify.com/s/files/1/0762/8763/9861/files/croissant-60x60.png?v=1685432025',
    'https://cdn.shopify.com/s/files/1/0762/8763/9861/files/promotion.png?v=1685432025'
  ];
  return (
    <nav className="sticky left-0 top-0 z-50 flex w-full flex-wrap items-center justify-between bg-gradient-top-to-bottom">
      <div className="grid w-full grid-cols-3 items-center gap-4 px-4 py-2 lg:hidden">
        <div className="flex items-center justify-start">
          <MobileMenu menu={menu} />
          <a
            href="line://oaMessage/@378izimq/I'd%20like%20to%20make%20a%20reservation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="text-secondml-2 h-7 w-7"
              src="/LINE_Brand_icon.png"
              width={90}
              height={90}
              alt="line cagette account"
            />
          </a>{' '}
          <a
            href="https://m.me/cagettebkk"
            className="inline-flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="pr-1">
              <FbIcon className="ml-2 h-7 w-7 text-second" />
            </span>
          </a>
        </div>
        <div className="flex justify-center text-center">
          <Link href="/" aria-label="Go back home">
            <Image
              src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/logo-main.png?v=1683873400"
              className="mx-auto h-auto w-20 transition-transform hover:scale-110"
              alt="cagette bangkok logo"
              width={541}
              height={304}
            />
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <SearchMenu menu={menu} />
          <div className="px-2" />
          <Suspense fallback={<CartIcon className="h-6 text-black" />}>
            {/* @ts-expect-error Server Component */}
            <Cart />
          </Suspense>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="hidden w-full justify-between lg:flex">
          <div className="w-1/4 px-4 md:flex md:items-center md:justify-between">
            <div className="block lg:hidden">
              <MobileMenu menu={menu} />
            </div>
            <div className="py-2">
              <div className="hidden px-4 py-2 text-center lg:block">
                <p className="items-center uppercase md:text-xs lg:text-xs xl:px-4 xl:text-xs">
                  contact us 
                </p>
                <a
                  href="line://oaMessage/@378izimq/I'd%20like%20to%20make%20a%20reservation"
                  className="inline-flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  <span className="pr-1">
                    <Image
                      className="ml-2 h-7 w-7 text-second"
                      src="/LINE_Brand_icon.png"
                      width={90}
                      height={90}
                      alt="line cagette account"
                    />
                  </span>
                </a>
                <a
                  href="https://m.me/cagettebkk"
                  className="inline-flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="pr-1">
                    <FbIcon className="ml-2 h-7 w-7 text-second" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex w-1/4 items-center justify-end">
            <Link href="/the-restaurant" className="px-2 text-sm uppercase md:text-base lg:px-4">
              Restaurant
            </Link>
            <Link href="/delicatessen-shop" className="px-2 text-sm uppercase md:text-base lg:px-4">
              The Deli
            </Link>
          </div>

          <div className="flex w-1/4 items-center justify-center">
            <Link href="/" aria-label="Go back home">
              <Image
                src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/logo-main.png?v=1683873400"
                className="h-auto w-20 transition-transform hover:scale-110"
                alt=""
                width={541}
                height={304}
              />
            </Link>
          </div>

          <div className="flex w-1/4 items-center justify-start">
            <Link href="/e-shop" className="px-4 uppercase">
              E-Shop
            </Link>
            <Link href="/contact-us" className="px-4 uppercase">
              Contact Us
            </Link>
          </div>

          <div className="w-1/4 px-4 md:flex md:items-center md:justify-end">
            <div className=" md:inline-flex">
              <Search />
            </div>
            <div className="mx-4  md:inline-flex">
              <Link href="/signin" className="text-black">
                <UsersIcon className="text-secondh-7 w-7" />
              </Link>
            </div>
            <Suspense fallback={<CartIcon className=" h-6 text-black" />}>
              {/* @ts-expect-error Server Component */}
              <Cart />
            </Suspense>
            
          </div>
        </div>
      </div>

      <div className="flex  w-full justify-start overflow-x-auto bg-second py-2 text-white md:py-4 lg:justify-center">
        {menu.length ? (
          <ul className="inline-flex">
            {menu.map((item, index: number) => (
              <li key={item.title} className=" mx-2 inline-flex items-center md:mx-2 lg:mx-2">
                <Link
                  href={item.path}
                  className="flex items-center whitespace-nowrap px-2 py-1 uppercase"
                >
                  <Image
                    src={images[index % images.length] as string}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="ml-2.5 mr-2 h-8 w-8"
                  />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </nav>
  );
}
