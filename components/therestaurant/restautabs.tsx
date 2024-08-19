'use client';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import { RestauSlider } from './slider';

export function RestauTabs() {
  return (
    <>
      <div className="section2restau bg-dark/40 py-12 md:py-20">
        <div className="container mx-auto text-center">
          <h1 className="pt-[32vh] text-center text-3xl font-bold text-white  drop-shadow-[0_35px_35px_rgba(0,0,0,0.65)] md:pt-[12vh] md:text-6xl ">
          The Restaurant
          </h1>
          <p className="g px-14 pt-[5vh] text-center  text-lg text-white drop-shadow-[35px_35px_35px_rgba(0,0,0,0.65)] md:text-2xl">
            Indulge yourself in the spirit of a Parisian bistro with a natural scenery! <br />
            We welcome you daily to enjoy fresh French food in the green Yennakart in the heart of
            Sathorn!
          </p>
          <div className="pt-4 lg:pt-12" />
          <a
            href="https://bookv5.chope.co/booking?rid=cagettecnd1905bkk&source=rest_website.cagette"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-3 py-2 text-xl font-bold uppercase  text-second hover:bg-second hover:text-white md:px-6 md:py-2"
          >
            Book a Table
          </a>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center pt-[6vh] text-center text-lg  md:pt-[6vh]">
        <h2 className="pb-6 text-5xl font-extrabold text-second md:pb-10">Our Menus</h2>
        <Tab.Group>
          <Tab.List className="mx-auto flex items-center justify-center text-sm md:text-xl">
            <Tab
              as="div"
              className={({ selected }) =>
                selected
                  ? 'rounded-full bg-second px-2 text-white focus:ring-second md:px-6 md:py-2'
                  : 'rounded-full bg-gray-200 px-2 text-gray-500 hover:bg-second hover:text-white focus:ring-second md:px-6 md:py-2'
              }
            >
              Set Lunch
            </Tab>
            <div className="w-none px-[5px] md:mx-2 md:w-14 md:border-b md:border-dashed md:border-gray-400"></div>
            <Tab
              as="div"
              className={({ selected }) =>
                selected
                  ? 'rounded-full bg-second px-2 text-white md:px-6 md:py-2'
                  : 'rounded-full bg-gray-200 px-2 text-gray-500 hover:bg-second hover:text-white md:px-6 md:py-2'
              }
            >
              A la Carte
            </Tab>
            <div className="w-none px-[5px] md:mx-2 md:w-14 md:border-b md:border-dashed md:border-gray-400"></div>
            <Tab
              as="div"
              className={({ selected }) =>
                selected
                  ? 'rounded-full bg-second px-2 text-white md:px-6 md:py-2'
                  : 'rounded-full bg-gray-200 px-2 text-gray-500 hover:bg-second hover:text-white md:px-6 md:py-2'
              }
            >
              La Criée
            </Tab>
            <div className="w-none px-[5px] md:mx-2 md:w-14 md:border-b md:border-dashed md:border-gray-400"></div>
            <Tab
              as="div"
              className={({ selected }) =>
                selected
                  ? 'rounded-full bg-second px-2 text-white md:px-6 md:py-2'
                  : 'rounded-full bg-gray-200 px-2 text-gray-500 hover:bg-second hover:text-white md:px-6 md:py-2'
              }
            >
              Brunch
            </Tab>
          </Tab.List>

          <Tab.Panels className="flex items-center justify-center text-gray-800">
            <Tab.Panel>
              <div className="w-full pb-3 pt-10 md:pb-6 md:pt-12">
                <p className="">
                  Our weekly set lunch is a perfect solution for a quick business lunch or to simply
                  indulge yourself with good food for a perfect value for money!
                </p>
                <p className="text-center font-bold">
                  It is available Monday to Saturday from 11:30AM to 3:00PM{' '}
                </p>
              </div>
              <div className="grid grid-cols-1  py-6 md:grid-cols-2 md:px-20 md:py-12">
                <div className="">
                  <Image
                    // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/sl.webp?v=1684922024"
                    src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/1_ef6d3a9b-c3c9-4acf-b377-6e20dac39948.png?v=1719430584"
                    className="h-full object-contain md:px-4"
                    width={1920}
                    height={940}
                    alt="tuna cagette restaurant"
                  />
                </div>
                <div className="">
                  <Image
                    // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/LUNCH-MENU_MAY_2.webp?v=1684922023"
                    src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/WhatsApp_Image_2024-08-19_at_11.39.58.jpg?v=1724044385"
                    className="h-full object-contain md:px-4"
                    width={1920}
                    height={940}
                    alt=""
                  />
                </div>
              </div>
            </Tab.Panel>

            <Tab.Panel>
              <div className="w-full pb-3 pt-6 md:pb-6 md:pt-12">
                <p className="">
                  From French traditional dish to generous mixed platters, our “A la Carte” menu
                  will satisfy all your cravings!
                  <div className="font-bold">Available daily from 11:30AM to 11:00PM</div>
                </p>
              </div>
              <div className="grid grid-cols-1 py-6 md:grid-cols-2 md:px-20 md:py-12">
                <div className="grid">
                  <Image
                    // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/sl.webp?v=1684922024"
                    src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/3_efeb6ef0-cac0-4473-a241-9e5f658858fd.png?v=1719430575"
                    className="h-full object-contain md:px-4"
                    alt="tuna cagette restaurant"
                    width={1920}
                    height={940}
                  />
                </div>
                <div className="grid">
                  <RestauSlider />
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              {' '}
              <div className="w-full pb-3 pt-6 md:pb-6 md:pt-12">
                <p className="">
                  Every Friday, La Criée is fully loaded for the week-end with a large selection of
                  imported wild fresh fish & seafood! Ask for our staff to send you the updated
                  version of our board!
                  <div className="font-bold">
                    You will find some delicious & seasonal products from the sea!
                  </div>
                </p>
              </div>
              <div className="grid grid-cols-1  py-6 md:grid-cols-2 md:px-20 md:py-12">
                <div className="">
                  <Image
                    // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/crie.webp?v=1684977173"
                    src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/10.png?v=1719430539"
                    className="h-full object-contain md:px-4"
                    width={1920}
                    height={940}
                    alt="tuna cagette restaurant"
                  />
                </div>
                <div className="">
                  <Image
                    // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/lacriee.webp?v=1684977172"
                    src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/11.png?v=1719430318"
                    className="h-full object-contain md:px-4"
                    width={1920}
                    height={940}
                    alt=""
                  />
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              {' '}
              <div className="w-full pb-3 pt-6 md:pb-6 md:pt-12">
                <p className="">
                  Best brunch in Bangkok is at Cagette! Every Sunday from 11:30am to 3:00pm enjoy
                  our all-you-can-eat brunch buffet!
                </p>
              </div>
              <div className="grid grid-cols-1  py-6 md:grid-cols-2 md:px-20 md:py-12">
                <div className="">
                  <Image
                    // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/bru2.webp?v=1684977332"
                    src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/12.png?v=1719430591"
                    className="h-full object-contain md:px-4"
                    width={1920}
                    height={940}
                    alt="tuna cagette restaurant"
                  />
                </div>
                <div className="">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/13.png?v=1719430210"
                    // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/2.webp?v=1684977332"
                    className="h-full object-contain md:px-4"
                    width={1920}
                    height={940}
                    alt=""
                  />
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}
