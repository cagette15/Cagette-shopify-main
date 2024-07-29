'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';

export function ParallaxComponent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', checkMobile);
    checkMobile();
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <div className="section1" style={{ minHeight: '100vh', backgroundColor: 'black' }}>
        <Parallax
          strength={-200}
          renderLayer={(percentage) => (
            <div
              style={{
                position: 'absolute',
                background: `url("https://cdn.shopify.com/s/files/1/0762/8763/9861/files/home-parallax-1.webp?v=1685354624") ${
                  isMobile ? 'center' : '21%'
                } / ${isMobile ? 'cover' : 'contain'} no-repeat fixed`,
                left: 0,
                top: 0,
                width: percentage * 1900,
                minHeight: '100vh'
              }}
            />
          )}
        >
          <div className="grid h-screen gap-4 text-white sm:grid-cols-1 md:grid-cols-2">
            <div className=""> </div>
            <div className="md:relative">
              <div className="bottom-40 text-center md:absolute md:bottom-60">
                <h3 className="py-4 text-center text-3xl font-bold italic text-white md:text-6xl">
                  Welcome to
                </h3>
                <Image
                  src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/logo-main.png?v=1683873400"
                  className="mx-auto h-auto w-32 py-2 transition-transform hover:scale-110"
                  width={541}
                  height={304}
                  alt="Cagette"
                />
                <p className="mb-5 py-4 text-center font-medium italic">“Cagette”</p>
                <p className="mb-5 text-lg font-medium md:mx-auto md:w-2/4">
                  French, for a crate made of wood slats. Stackable and light, it is used to
                  transport all sorts of fruits, vegetables &amp; fresh products. Its precious use
                  has been proven through the years, from the fields &amp; farms to the markets!
                  This is our tribute to this messenger of taste…
                </p>
                <p className="mb-5 font-medium">But Cagette is also…</p>
                <div className="mt-10 text-center">
                  <Link
                    className="focus:ring--[#95112c] mb-2  mr-2 rounded-full bg-second px-5 py-2.5 text-center text-base font-medium uppercase text-white hover:bg-[#95112c] focus:outline-none focus:ring-4"
                    href="/the-restaurant"
                    title=""
                  >
                    Restaurant
                  </Link>
                  <Link
                    className="focus:ring--[#95112c] mb-2  mr-2 rounded-full bg-second px-5 py-2.5 text-center text-base font-medium uppercase text-white hover:bg-[#95112c] focus:outline-none focus:ring-4"
                    href="/e-shop"
                    title=""
                  >
                    E-Shop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax
          strength={500}
          bgImageStyle={{ objectFit: 'cover' }}
          bgImage="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/home-parallax-2.webp?v=1685354625"
          bgImageAlt="Background Image 2"
          style={{ minHeight: '100vh' }}
        >
          <div className="container mx-auto px-4">
            <div className="grid h-screen gap-4 text-white sm:grid-cols-1 md:grid-cols-2">
              <div className="relative">
                <div className="absolute top-20 md:bottom-60">
                  <h3 className="py-8 text-3xl font-bold text-white md:py-4 md:text-6xl">
                    … A place to dine
                    <br />
                    THE RESTAURANT
                  </h3>

                  <div className="mb-5 rounded-2xl bg-black/50  px-4 py-4">
                    <p className="mb-5 text-lg font-medium">
                      Indulge yourself in the spirit of a Parisian bistro with a natural scenery!
                      Cagette Canteen is the place to experience true French cuisine in the heart of
                      Bangkok!
                    </p>
                    <p className="mb-5  text-lg font-medium">
                      Indoor & outdoor: Open all day & everyday from 11:00 AM to 11:00 PM Parking
                      and valet available
                    </p>
                  </div>
                  <div className="mt-10">
                    <Link
                      className="focus:ring--[#95112c] mb-2  mr-2 rounded-full bg-second px-5 py-3 text-center text-base font-medium uppercase text-white hover:bg-[#95112c] focus:outline-none focus:ring-4"
                      href="/the-restaurant"
                      title=""
                    >
                      Menus & Booking
                    </Link>
                  </div>
                </div>
              </div>{' '}
              <div className=""> </div>
            </div>
          </div>
        </Parallax>

        <Parallax
          strength={500}
          bgImageStyle={{ objectFit: 'cover' }}
          bgImage="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/home-parallax-3.webp?v=1685354625"
          bgImageAlt="Background Image 3"
        >
          <div className="container mx-auto px-4 text-right">
            <div className="grid h-screen gap-4 text-white sm:grid-cols-1 md:grid-cols-2">
              {' '}
              <div className=""> </div>
              <div className="relative">
                <div className="absolute bottom-40 md:bottom-60">
                  <h3 className="py-8 text-3xl font-bold text-white md:py-4 md:text-6xl">
                    … A place to shop
                    <br />
                    THE DELI & WINE CELLAR
                  </h3>

                  <div className="mb-5 rounded-2xl bg-black/50  px-4 py-4">
                    <p className="mb-5 text-lg font-medium">
                      Our unexpected & fully furnished gourmet fresh market is located on the 3rd
                      floor above our restaurant. This all-in-one venue is the place for shopping
                      premium delicatessen products as well as over 300 Wine labels to pick from the
                      shelves. The Deli & Wine Cellar can also be privatized for all kind of
                      exclusive events!
                    </p>
                    <p className="mb-5  text-lg font-medium">
                      Visit our Deli every day from 10AM to 9PM
                    </p>
                  </div>
                  <div className="mt-10">
                    <Link
                      className="focus:ring--[#95112c] mb-2  mr-2 rounded-full bg-second px-5 py-3 text-center text-base font-medium uppercase text-white hover:bg-[#95112c] focus:outline-none focus:ring-4"
                      href="/delicatessen-shop"
                      title=""
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>{' '}
            </div>
          </div>
        </Parallax>

        <Parallax
          strength={500}
          bgImageStyle={{ objectFit: 'cover' }}
          bgImage="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/home-parallax-4.webp?v=1685354625"
          bgImageAlt="Background Image 4"
        >
          <div className="container mx-auto px-4">
            <div className="grid h-screen gap-4 text-white sm:grid-cols-1 md:grid-cols-2">
              <div className="relative">
                <div className="absolute top-44 md:bottom-60">
                  <h3 className="py-8 text-3xl font-bold text-white md:py-4 md:text-6xl">
                    … An accessible
                    <br />
                    ONLINE SHOP
                  </h3>

                  <div className="mb-5 rounded-2xl bg-black/50  px-4 py-4">
                    <p className="mb-5 text-lg font-medium">
                      Visit our E-Shop and get the best of our products delivered to your doorstep
                      in Bangkok and its surroundings areas! A large selection of imported and
                      homemade cold cuts, cheeses, butchery, fresh fish & seafood, cooked
                      delicatessen, bakery… delivered in a Cagette!
                    </p>
                  </div>
                  <div className="mt-10">
                    <Link
                      className="focus:ring--[#95112c] mb-2  mr-2 rounded-full bg-second px-5 py-3 text-center text-base font-medium uppercase text-white hover:bg-[#95112c] focus:outline-none focus:ring-4"
                      href="https://www.cagettebkk.com/the-restaurant/"
                      title=""
                    >
                      Shop Online
                    </Link>
                  </div>
                </div>
              </div>{' '}
              <div className=""> </div>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  );
}
