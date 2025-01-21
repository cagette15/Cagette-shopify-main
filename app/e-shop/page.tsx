/* eslint-disable @next/next/no-img-element */
import { EshopCarousel } from 'components/eshop/carousel-eshop';
import EshopSliderOne from 'components/eshop/sliderone';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
export const runtime = 'edge';

export const metadata = {
  title: 'Cagette Canteen & Deli: Online Shop for French Gourmet Products',
  description:
    'Cagette Canteen & Deli is the online shop for French gourmet products in Bangkok. The e-shop offers a wide variety of cheeses, charcuterie, pastries, and wines, all of which are imported from France. The staff is knowledgeable and helpful, and they can help you find the perfect products for your needs.',
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(process.env.SITE_NAME || '')}`,
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  }
};

export default async function EshopPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <EshopSliderOne />
      <div className="md:pb14 container mx-auto px-4 pb-8 pt-12 text-center md:pt-24">
        <h2 className="text-2xl font-bold uppercase text-second md:text-4xl">HOT DEALS</h2>

        <p className="mt-4 px-4 py-2 text-xl text-gray-700 md:px-6 md:py-4">
Our Chefs prepared everything you need to celebrate.
          <br />
         Monthly Chef's Selection at a Friendly Price.
        </p>
        <div className="pt-6 md:pt-14">
          <Suspense>
            {/* @ts-expect-error Server Component */}
            <EshopCarousel />
          </Suspense>
        </div>
        <div className="py-6 md:py-14">
          <Link
            href="/search/promotions"
            className="w-fit rounded-full bg-second px-4 py-2 text-lg font-bold uppercase text-white hover:bg-black md:px-6  md:py-4 md:text-lg"
          >
            more promotion
          </Link>
        </div>
      </div>
      <div className="bg-footer">
        <div className="container mx-auto  py-4 md:py-10">
          <div className="mx-auto flex flex-wrap md:pt-20">
            <div className="w-full px-6 md:w-1/3 md:pt-4">
              <h2 className="text-xl font-bold text-cagette md:text-3xl">
                SHIPPING IN BANGKOK AND ALL PROVINCES
              </h2>
              <p className="py-6 text-white">
                If you’re craving for Cagette’s products and live too far away…don’t worry! It can
                be shipped all over Thailand.
              </p>
              <p className="pt-3 font-bold text-white">Favorite destinations:</p>
              <p className="pb-6 pt-3 text-white md:pb-12">
                Samui – Pattaya – Phuket – Chiang Mai – Chiang Rai …
              </p>{' '}
              <div className="py-6 md:py-9">
                <Link
                  href="/search/promotions"
                  className="w-fit rounded-full bg-cagette px-4 py-2 text-lg font-bold uppercase text-second hover:bg-black hover:text-white md:px-6  md:py-4 md:text-lg"
                >
                  more promotion
                </Link>
              </div>
            </div>
            <div className="w-full px-6 md:w-1/3">
              <img
                src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/delivery-2.png?v=1686652809"
                alt="delivery cagette thailand"
                className="mx-auto w-2/3"
              />
            </div>
            <div className="w-full px-6 md:w-1/3 md:pt-4">
              <h2 className="text-xl font-bold text-cagette md:text-3xl">
                YOU ARE A PROFESSIONAL ?
              </h2>
              <p className="py-6 text-white">
                Cagette Canteen & Deli offers consulting solutions for hospitality professionals.
                Create your professional account and purchase our products for your restaurant at
                discounted wholesale prices.
              </p>
              <div className="py-6 md:py-9">
                <Link
                  href="/signup"
                  className="w-fit rounded-full bg-cagette px-4 py-2 text-lg font-bold uppercase text-second hover:bg-black hover:text-white md:px-6  md:py-4 md:text-lg"
                >
                  Create an Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cagette">
        <div className="container mx-auto py-12 md:py-20">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/service-restaurant.png?v=1685077756"
                height={250}
                width={250}
                className="h-40 w-40"
                alt=""
              />
              <h4 className="text-2xl capitalize text-dark">Friendly Service</h4>
              <p className="px-4 py-6 text-lg text-gray-700">
                An international dedicated team, working with passion and a true French «
                Savoir-Faire ».
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/noun-restaurant-1943006.png?v=1685077662" // Add the correct URL
                height={250}
                width={250}
                className="h-32 w-32"
                alt=""
              />
              <h4 className="pt-6 text-2xl capitalize text-dark">Outdoor Area</h4>
              <p className="px-4 py-6 text-lg text-gray-700">
                In the heart of Sathorn, Cagette Canteen & Deli is offering a peaceful terrace with
                a green scenery!
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/noun-car-park-4369060.png?v=1685077649"
                height={250}
                width={250}
                className="h-32 w-32"
                alt=""
              />
              <h4 className="pt-6 text-2xl capitalize text-dark">Free Parking Lot</h4>
              <p className="px-4 py-6 text-lg text-gray-700">
                We have 15 parking lots at Cagette and valets service to assist you and watch out
                your vehicle.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/noun-food-delivery-1946838.png?v=1685077649"
                height={250}
                width={250}
                className="h-32 w-32"
                alt=""
              />
              <h4 className="pt-6 text-2xl capitalize text-dark">Fast Delivery</h4>
              <p className="px-4 py-6 text-lg text-gray-700">
                Order your food and get delivered within 1hr in Bangkok! Delivery the next day in
                other provinces!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
