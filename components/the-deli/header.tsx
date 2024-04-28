import Image from 'next/image';
import Link from 'next/link';
import DeliSliderOne from './sliderone';
import DeliSliderThree from './sliderthree';
import DeliSliderTwo from './slidertwo';

export function HeaderTheDeli() {
  return (
    <>
      <div className="bg-deli  bg-dark/40 py-12 md:py-20">
        <div className="container mx-auto ">
          <h1 className="pt-[32vh] text-center text-3xl font-bold text-white  drop-shadow-[0_35px_35px_rgba(0,0,0,0.65)] md:pt-[12vh] md:text-6xl">
            THE DELI
          </h1>
        </div>
      </div>
      <div className="bg-cagette">
        <div className="container mx-auto grid grid-cols-1 items-center  justify-center px-4 pt-[6vh] text-center text-lg  md:grid-cols-2 md:py-12 md:pt-[6vh]">
          <div className="mx-auto w-full px-4 py-12 md:px-24 lg:min-h-[45vh]">
            <DeliSliderOne />
          </div>
          <div className=" text-left  md:px-24">
            <h3 className="text-3xl font-bold uppercase text-second md:text-4xl">
              DELICATESSEN SHOP
            </h3>
            <p className="py-4 text-gray-700">
              Visit us on the 3rd floor to try & shop our exclusive delicatessen products.{' '}
            </p>
            <p className="pb-4 text-gray-700">
              Our friendly and helpful manager will guide you along your delicious journey with us!
              we ensure a quality service and adapted recommendations to your specific needs. If you
              are looking for an outside catering solution, you&rsquo;ve knocked at the right door
              with our all in one special take-away cagette, boards &amp; platters! cheese &ndash;
              cold cuts &ndash; veggies &ndash; butchery &ndash; fresh fish &amp; much more to
              discover!
            </p>

            <p className="pb-6 font-semibold text-gray-700">OPEN EVERYDAY FROM 10AM TO 9PM</p>
            <Link
              className="focus:ring--[#95112c] mb-2 mr-2 rounded-full bg-second px-5 py-3 text-center text-base font-medium uppercase text-white hover:bg-[#95112c] focus:outline-none focus:ring-4"
              href="/e-shop"
              title=""
            >
              Our products
            </Link>
          </div>
          <div className=" py-20  text-left md:px-24 md:py-0">
            <h3 className="text-3xl font-bold uppercase text-second md:text-4xl">WINE CELLAR</h3>
            <p className="py-4 font-bold uppercase text-gray-700">
              “The most prestigious bottles begin to exist the moment you empty them with friends”.
              Paul Bocuse
            </p>
            <p className="pb-4 text-gray-700">
              Welcome to Cagette’s Wines Cellar, our golden temple filled with over 300 references
              of some of the best French & Worldwide bottles!
            </p>
            <p className="pb-4 text-gray-700">
              All our wines are available to drink at Cagette or for take-away!
            </p>
            <p className="pb-6 text-gray-700">
              Stay tuned for our unqiue wine events that are happening monthly…
            </p>
            <Link
              className="focus:ring--[#95112c] mb-2 mr-2 rounded-full bg-second px-5 py-3 text-center text-base font-medium uppercase text-white hover:bg-[#95112c] focus:outline-none focus:ring-4"
              href="/e-shop"
              title=""
            >
              Our wine list
            </Link>
          </div>{' '}
          <div className="mx-auto w-full px-4 py-12 md:px-24">
            <DeliSliderTwo />
          </div>{' '}
          <div className="mx-auto w-full px-4 py-12 md:px-24">
            <DeliSliderThree />
          </div>
          <div className=" py-20 text-left md:px-24 md:py-0">
            <h3 className="text-3xl font-bold uppercase text-second md:px-24 md:text-4xl">
              PRIVATE TABLE
            </h3>
            <p className="py-4 font-bold uppercase text-gray-700">
              BIRTHDAY – WEDDING – CORPORATE – FAREWELL – WINE EVENTS{' '}
            </p>
            <p className="pb-4 text-gray-700">
              Available for large groups of friends or family, from 2 to 28 people, our private
              dining room is the perfect venue to celebrate any occasion with privacy!
            </p>
            <p className="pb-4 text-gray-700">
              Available for large groups of friends or family, from 2 to 28 people, our private
              dining room is the perfect venue to celebrate any occasion with privacy!
            </p>
            <p className="pb-6 text-gray-700">
              We create special sharing menus, wine paring set dinner, brunch menu and more to
              discover… Contact us for more details!{' '}
            </p>
            <Link
              className="focus:ring--[#95112c] mb-2 mr-2 rounded-full bg-second px-5 py-3 text-center text-base font-medium uppercase text-white hover:bg-[#95112c] focus:outline-none focus:ring-4"
              href="/contact-us"
              title=""
            >
              Inquire here
            </Link>
          </div>{' '}
        </div>
      </div>
      <div className="bg-footer py-12 md:py-20">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
          Shop – Eat – Drink & Party!
        </h2>
      </div>
      <div className="bg-cagette">
        <div className="container mx-auto py-12 md:py-20">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/service-restaurant.png?v=1685077756"
                height={250}
                width={250}
                className="h-28 w-28 md:h-40 md:w-40"
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
                className="h-24 w-24 md:h-32 md:w-32"
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
                className="h-24 w-24 md:h-32 md:w-32"
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
                className="h-24 w-24 md:h-32 md:w-32"
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
