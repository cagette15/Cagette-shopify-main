'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeSliderPage() {
  return (
    <>
      <div className="w-full bg-black">
        <div className="bgimg-1 h-[95vh] text-white">
          <div className="container mx-auto flex max-w-6xl items-center justify-center px-6 md:justify-end md:px-0">
            <div className="hidden w-full md:w-1/2"></div>
            <div className="w-full pt-[12vh] md:w-1/2 md:pt-[35vh] lg:pt-[7vh]">
              <div className="text-center">
                <h3
                  className="mb-0 text-2xl font-extrabold italic leading-none tracking-normal text-white md:text-5xl"
                  style={{ textShadow: '1px 1px 1px rgba(0,0,0,0)' }}
                >
                  Welcome to
                </h3>
                <Image
                  src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/logo-mainpage.webp?v=1686741839"
                  width={980}
                  height={700}
                  alt="cagette home Logo"
                  className="mx-auto w-auto"
                />
                <p
                  className="mb-5 box-border text-base font-medium italic text-white md:text-lg"
                  style={{ textShadow: '1px 1px 7px black' }}
                >
                  Cagette
                </p>
                <p
                  className="py-1 text-base font-medium text-white md:py-3 md:text-lg"
                  style={{ textShadow: '1px 1px 7px black' }}
                >
                  French, for a crate made of wood slats. Stackable and light, it is used to
                  transport all sorts of fruits, vegetables & fresh products. Its precious use has
                  been proven through the years, from the fields & farms to the markets! This is our
                  tribute to this messenger of taste…
                </p>
                <p
                  className="py-3 text-base font-medium text-white md:text-lg"
                  style={{ textShadow: '1px 1px 7px black' }}
                >
                  But Cagette is also…
                </p>
                <div className="mt-10 text-center">
                  <Link
                    className="focus:ring--[#95112c] mb-2  mr-2 rounded-full bg-second px-5 py-2.5 text-center text-base font-medium uppercase text-white hover:bg-[#95112c] focus:outline-none focus:ring-4"
                    href="/the-restaurant"
                    title=""
                  >
                    Restaurant
                  </Link>
                  <Link
                    className="focus:ring--[#95112c] mb-2  mr-2 rounded-full bg-second px-5 py-3 text-center text-base font-medium uppercase text-white hover:bg-[#95112c] focus:outline-none focus:ring-4"
                    href="/e-shop"
                    title=""
                  >
                    E-Shop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bgimg-2 h-[90vh] text-white">
          <div className="container mx-auto flex max-w-7xl items-center justify-center px-6 md:justify-start md:px-0">
            <div className="w-full   pt-[15vh] md:w-1/2 md:pt-[35vh]  lg:pt-[15vh]">
              <div className="p-8 text-left">
                <h3
                  className="mb-6 text-2xl font-extrabold italic leading-none tracking-normal text-white md:text-5xl"
                  style={{ textShadow: '1px 1px 1px rgba(0,0,0,0)' }}
                >
                  … A place to dine
                  <br /> <span className="not-italic">THE RESTAURANT</span>
                </h3>
                <div className="rounded-xl bg-black/60 p-2">
                  <p
                    className="py-1 text-base font-medium text-white md:py-3 md:text-lg"
                    style={{ textShadow: '1px 1px 7px black' }}
                  >
                    Indulge yourself in the spirit of a Parisian bistro with a natural scenery!
                    Cagette Canteen is the place to experience true French cuisine in the heart of
                    Bangkok!
                  </p>
                  <p
                    className="py-3 text-base font-medium text-white md:text-lg"
                    style={{ textShadow: '1px 1px 7px black' }}
                  >
                    Indoor & outdoor: Open all day & everyday from 11:00 AM to 11:00 PM Parking and
                    valet available
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
            </div>
            <div className="hidden w-full md:w-1/2"></div>
          </div>
        </div>

        <div className="bgimg-4 h-[90vh] text-white">
          <div className="container mx-auto flex items-center justify-center px-6 md:max-w-7xl md:justify-end md:px-0">
            {' '}
            <div className="hidden w-full md:w-1/2"></div>
            <div className="w-full  pt-[15vh] md:w-1/2 md:pt-[35vh] lg:pt-[15vh]">
              <div className="p-8 text-right">
                <h3 className="mb-6 text-2xl font-extrabold italic leading-none tracking-normal text-white shadow-black drop-shadow md:text-5xl">
                  … A place to shop
                  <br />
                  <span className="not-italic">THE DELI & WINE CELLAR</span>
                </h3>
                <div className="rounded-xl bg-black/60 p-2 text-right">
                  <p
                    className="py-1 text-base font-medium text-white md:py-3 md:text-lg"
                    style={{ textShadow: '1px 1px 7px black' }}
                  >
                    Our unexpected & fully furnished gourmet fresh market is located on the 3rd
                    floor above our restaurant. This all-in-one venue is the place for shopping
                    premium delicatessen products as well as over 300 Wine labels to pick from the
                    shelves. The Deli & Wine Cellar can also be privatized for all kind of exclusive
                    events!
                  </p>
                  <p
                    className="py-3 text-base font-medium text-white md:text-lg"
                    style={{ textShadow: '1px 1px 7px black' }}
                  >
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
            </div>
            <div className="hidden w-full md:w-1/2"></div>
          </div>
        </div>
        <div className="bgimg-3 h-[90vh] text-white">
          <div className="container mx-auto flex max-w-7xl items-center justify-center px-6 md:justify-start md:px-0">
            <div className="w-full   pt-[15vh] md:w-1/2 md:pt-[35vh]  lg:pt-[15vh]">
              <div className="p-8 text-left">
                <h3
                  className="mb-6 text-2xl font-extrabold italic leading-none tracking-normal text-white md:text-5xl"
                  style={{ textShadow: '1px 1px 1px rgba(0,0,0,0)' }}
                >
                  … An accessible
                  <br /> <span className="not-italic">ONLINE SHOP</span>
                </h3>
                <div className="rounded-xl bg-black/60 p-2">
                  <p
                    className="py-1 text-base font-medium text-white md:py-3 md:text-lg"
                    style={{ textShadow: '1px 1px 7px black' }}
                  >
                    Visit our E-Shop and get the best of our products delivered to your doorstep in
                    Bangkok and its surroundings areas! A large selection of imported and homemade
                    cold cuts, cheeses, butchery, fresh fish & seafood, cooked delicatessen, bakery…
                    delivered in a Cagette!
                  </p>
                </div>
                <div className="mt-10">
                  <Link
                    className="focus:ring--[#95112c] mb-2  mr-2 rounded-full bg-second px-5 py-3 text-center text-base font-medium uppercase text-white hover:bg-[#95112c] focus:outline-none focus:ring-4"
                    href="/e-shop"
                    title="cagette online shop"
                  >
                    Shop Online
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden w-full md:w-1/2"></div>
          </div>
        </div>
        <div className="bgimg-5 h-[90vh] text-white">
          <div className="container mx-auto flex max-w-7xl items-center justify-center px-6 md:px-0">
            <div className="w-full   pt-[35vh] md:w-1/2 md:pt-[35vh]  lg:pt-[35vh]">
              <div className="p-8 text-center">
                <h3 className="shade mb-6 text-2xl font-extrabold leading-none tracking-normal text-white md:text-5xl">
                  QUESTIONS?
                  <br /> <span className="not-italic">CONTACT US</span>
                </h3>
                <div className=" pt-12 md:pt-24" />
                <div className="rounded-xl bg-black/60 p-2">
                  <p
                    className="py-1 text-base font-medium text-white md:py-3 md:text-lg"
                    style={{ textShadow: '1px 1px 7px black' }}
                  >
                    Keep an update on our monthly promotions, special deals, private events and
                    subscribe to our newsletter!
                  </p>
                </div>
                <div className="mt-10">
                  <Link
                    className="focus:ring--[#95112c] mb-2 mr-2 rounded-full bg-second px-5 py-3 text-center text-base font-medium text-white hover:bg-[#95112c] focus:outline-none focus:ring-4"
                    href="/contact-us"
                    title="cagette online shop"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden w-full md:w-1/2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
