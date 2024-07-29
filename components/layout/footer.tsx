/* eslint-disable @next/next/no-async-client-component */
'use client';
import { FacebookMessenger, Whatsapp } from '@styled-icons/fa-brands/';
import { Phone } from '@styled-icons/heroicons-solid';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const LineIcon = styled(FacebookMessenger)`
  color: #aeaeae;
  width: 25px;
`;
const PhoneIcon = styled(Phone)`
  color: #aeaeae;
  width: 25px;
`;
export default async function Footer() {
  return (
    <footer className="bg-footer">
      <div className="mx-auto max-w-screen-xl px-4 py-9 sm:px-6 md:py-16 lg:px-8">
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="md:text-center ">
            <p className="relative text-lg font-medium text-white">
              Information
              <span className="absolute h-[2px] w-[50px] origin-bottom scale-x-125 transform bg-[#704242] md:-bottom-1 md:left-24 md:right-0 md:h-[2px]"></span>
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link className="text-gray-100 transition hover:text-gray-100/75" href="/">
                  Home
                </Link>
              </li>

              <li>
                <a className="text-gray-100 transition hover:text-gray-100/75" href="/">
                  About Us
                </a>
              </li>

              <li>
                <a className="text-gray-100 transition hover:text-gray-100/75" href="/">
                  Contacts
                </a>
              </li>
              <li>
                <a className="text-gray-100 transition hover:text-gray-100/75" href="/blogs">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          <div className="md:text-center ">
            <p className="relative text-lg font-medium text-white">
              Extras
              <span className="absolute h-[2px] w-[50px] origin-bottom scale-x-125 transform bg-[#704242] md:-bottom-1 md:left-28 md:right-0 md:h-[2px]"></span>
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a className="text-gray-100 transition hover:text-gray-100/75" href="/">
                  My Order
                </a>
              </li>

              <li>
                <Link
                  className="text-gray-100 transition hover:text-gray-100/75"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:text-center ">
            <p className="relative text-lg font-medium text-white">
              Get In Touch
              <span className="absolute h-[2px] w-[50px] origin-bottom scale-x-125 transform bg-[#704242] md:-bottom-1 md:left-24 md:right-0 md:h-[2px]"></span>
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link
                  className="text-gray-100 transition hover:text-gray-100/75"
                  href="https://www.google.com/maps/dir/?api=1&destination=15+Yen+Akat+Rd,+Khwaeng+Chong+Nonsi,+Khet+Yan+Nawa,+Krung+Thep+Maha+Nakhon+10120,+Thailand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mon. - Sun.: 11:00 - 23:00 15 Yen Akat Rd, Khwaeng Chong Nonsi, Khet Yan Nawa,
                  Krung Thep Maha Nakhon 10120
                </Link>
              </li>

              <li className="inline-flex items-center justify-center space-x-4">
                <a
                  className="inline-flex text-gray-100 transition hover:text-gray-100/75"
                  href="tel:+6622491684"
                >
                  <PhoneIcon className="h-12 w-12" />
                </a>

                <Link
                  className="text-gray-100 transition hover:text-gray-100/75"
                  href="line://msg/text/+66022491684"
                  target="_blank"
                >
                  <LineIcon />
                </Link>
                <Link href="https://wa.me/66649265436">
                  <Whatsapp
                    size={26}
                    className="text-gray-100/75 transition hover:text-gray-100/75"
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:text-center ">
            <p className="relative text-lg font-medium text-white">
              We Accept
              <span className="absolute h-[2px] w-[50px] origin-bottom scale-x-125 transform bg-[#704242] md:-bottom-1 md:left-24 md:right-0 md:h-[2px]"></span>
            </p>{' '}
            <div className="mx-auto mt-8  w-full space-y-4 text-sm">
              <Image
                src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/payment-image.webp?v=1686204178"
                width={1920}
                height={980}
                alt="payment image Cagette"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
