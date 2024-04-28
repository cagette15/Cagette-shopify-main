'use client';

import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import CloseIcon from 'components/icons/close';
import PhoneIcon from 'components/icons/phone';
import SearchIcon from 'components/icons/search';
import type { SimpleMenuItem } from 'lib/shopify';
import Image from 'next/image';
import SearchMobile from './searchmobile';

export default function SearchMenu({ menu }: { menu: SimpleMenuItem[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuIsOpen]);

  useEffect(() => {
    setMobileMenuIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        onClick={() => {
          setMobileMenuIsOpen(!mobileMenuIsOpen);
        }}
        aria-label="Open mobile menu"
        className="lg:hidden"
        data-testid="open-mobile-menu"
      >
        <SearchIcon className="h-7 w-7 text-black transition-all ease-in-out hover:scale-110 hover:text-gray-500" />
      </button>
      <AnimatePresence initial={false}>
        {mobileMenuIsOpen && (
          <Dialog
            as={motion.div}
            initial="closed"
            animate="open"
            exit="closed"
            key="dialog"
            static
            open={mobileMenuIsOpen}
            onClose={() => {
              setMobileMenuIsOpen(false);
            }}
            className="relative z-50"
          >
            <motion.div
              variants={{
                open: { opacity: 1, backdropFilter: 'blur(0.5px)' },
                closed: { opacity: 0, backdropFilter: 'blur(0px)' }
              }}
              className="fixed inset-0 bg-black/30"
              aria-hidden="true"
            />
            <div className="fixed inset-0 flex justify-end" data-testid="mobile-menu">
              <Dialog.Panel
                as={motion.div}
                variants={{
                  open: { translateX: 0 },
                  closed: { translateX: '-100%' }
                }}
                transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                className="flex w-full flex-col bg-gradient-top-to-bottom pb-6 "
              >
                <div className="p-4">
                  <button
                    className="mb-4"
                    onClick={() => {
                      setMobileMenuIsOpen(false);
                    }}
                    aria-label="Close mobile menu"
                    data-testid="close-mobile-menu"
                  >
                    <CloseIcon className="h-6" />
                  </button>
                  <div className="mb-4 w-full">
                    <SearchMobile />
                  </div>{' '}
                  <div className="mb-4 inline-flex space-x-4">
                    <a
                      href="line://oaMessage/@378izimq/I'd%20like%20to%20make%20a%20reservation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        className="text-blue-black  h-7 w-7"
                        src="/LINE_Brand_icon.png"
                        width={90}
                        height={90}
                        alt="line cagette account"
                      />{' '}
                      <div className="px-2" />
                    </a>
                    <a href="tel:+66022491684">
                      <PhoneIcon className="h-7 w-7 text-black transition-all ease-in-out hover:scale-110 hover:text-gray-500" />{' '}
                    </a>
                    <a
                      href="line://oaMessage/@378izimq/I'd%20like%20to%20make%20a%20reservation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="text-blue-black ml-2 h-7 w-7" />
                    </a>
                  </div>
                  <div className="mb-4 w-full">
                    <ul className="flex flex-col">
                      <li>
                        <Link
                          className="rounded-lg py-1 text-xl capitalize text-black transition-colors hover:text-gray-500"
                          href="/the-restaurant"
                          onClick={() => {
                            setMobileMenuIsOpen(false);
                          }}
                        >
                          Restaurant
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="rounded-lg py-1 text-xl capitalize text-black transition-colors hover:text-gray-500"
                          href="/delicatessen-shop"
                          onClick={() => {
                            setMobileMenuIsOpen(false);
                          }}
                        >
                          The Deli
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="rounded-lg py-1 text-xl capitalize text-black transition-colors hover:text-gray-500"
                          href="/e-shop"
                          onClick={() => {
                            setMobileMenuIsOpen(false);
                          }}
                        >
                          Eshop
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="rounded-lg py-1 text-xl capitalize text-black transition-colors hover:text-gray-500"
                          href="/Contact"
                          onClick={() => {
                            setMobileMenuIsOpen(false);
                          }}
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {menu.length ? (
                    <ul className="flex flex-col">
                      {menu.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.path}
                            className="rounded-lg py-1 text-xl text-black transition-colors hover:text-gray-500 "
                            onClick={() => {
                              setMobileMenuIsOpen(false);
                            }}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
