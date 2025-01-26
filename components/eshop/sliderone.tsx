'use client';

import Link from 'next/link';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function EshopSliderOne() {
  return (
    <>
      <Swiper
        loop={true}
        speed={2600}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="h-[35vh] w-full  bg-[url('https://cdn.shopify.com/s/files/1/0762/8763/9861/files/Heading_1.jpg?v=1732621968')] bg-cover bg-center lg:min-h-[55vh] ">
            <div className="justify-left flex h-full w-full items-center bg-black bg-opacity-50">
              <div className="container  text-center text-white">
                <h3 className="text-3xl font-bold text-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.65)] md:text-5xl">
                  Our Gourmet Selection
                </h3>
                <h2 className="text-3xl font-bold text-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.65)] md:text-5xl">
                   FRENCH CHEESE
                </h2>
                <h6 className="py-2 text-lg text-white drop-shadow-[35px_35px_35px_rgba(0,0,0,0.65)] md:text-2xl">
Over 40 cheeses imported weekly from France<br /> <br />
                 <Link href="search/christmas">
                    <span className="w-fit rounded-full bg-second px-4 py-2 text-lg font-bold text-white drop-shadow-[35px_35px_35px_rgba(0,0,0,0.65)] md:text-lg">
                      Shop Here
                    </span>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[35vh]  w-full bg-[url('https://cdn.shopify.com/s/files/1/0762/8763/9861/files/3.webp?v=1686638234')] bg-cover  bg-center lg:min-h-[55vh]">
            <div className="justify-left flex h-full w-full items-center bg-black bg-opacity-50">
              <div className="container text-center text-white">
                <h3 className="text-3xl font-bold text-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.65)] md:text-5xl">
                  PARTY PLATTERS & CAGETTES
                </h3>
                <h2 className="text-3xl font-bold text-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.65)] md:text-5xl">
                  Build your own!
                </h2>
                <h6 className="py-2 text-lg text-white drop-shadow-[35px_35px_35px_rgba(0,0,0,0.65)] md:text-2xl">
                  Tailor made platters according to your taste & ready to serve! <br /> <br />
                  <Link
                    href="/search/platters"
                    className="px- w-fit rounded-full bg-second px-4 py-2 text-lg font-bold text-white drop-shadow-[35px_35px_35px_rgba(0,0,0,0.65)] hover:bg-black md:text-lg "
                  >
                    Buy Here
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[35vh]  w-full bg-[url('https://cdn.shopify.com/s/files/1/0762/8763/9861/files/1.webp?v=1686638234')] bg-cover  bg-center lg:min-h-[55vh]">
            <div className="justify-left flex h-full w-full items-center bg-black bg-opacity-50">
              <div className="container text-center text-white">
                <h3 className="text-3xl font-bold text-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.65)] md:text-5xl">
                  FRESH BAKERY
                </h3>
                <h2 className="text-3xl font-bold text-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.65)] md:text-5xl">
                  French baguette, butter croissants, sourdough…
                </h2>
                <h6 className="py-2 text-lg text-white drop-shadow-[35px_35px_35px_rgba(0,0,0,0.65)] md:text-2xl">
                  Discover our homemade bread & viennoiseries <br /> <br />
                  <Link
                    href="/search/bakery"
                    className="w-fit rounded-full bg-second px-4 py-2 text-lg font-bold text-white drop-shadow-[35px_35px_35px_rgba(0,0,0,0.65)] hover:bg-black md:text-lg "
                  >
                    SHOP HERE
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[35vh]  w-full bg-[url('https://cdn.shopify.com/s/files/1/0762/8763/9861/files/4.webp?v=1686638234')] bg-cover  bg-center lg:min-h-[55vh]">
            <div className="justify-left flex h-full w-full items-center bg-black bg-opacity-50">
              <div className="container text-center text-white">
                <h3 className="text-3xl font-bold text-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.65)] md:text-5xl">
                  IMPORTED SEAFOOD
                </h3>
                <h2 className="text-3xl font-bold text-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.65)] md:text-5xl">
                  Build your own platter!
                </h2>
                <h6 className="py-2 text-lg text-white drop-shadow-[35px_35px_35px_rgba(0,0,0,0.65)] md:text-2xl">
                  Impress your guests with a tailor-made seafood platter composed with our freshly
                  imported products from France! <br /> <br />
                  <Link
                    href="/search/seafood"
                    className="w-fit rounded-full bg-second px-4 py-2 text-lg font-bold text-white drop-shadow-[35px_35px_35px_rgba(0,0,0,0.65)] hover:bg-black md:text-lg"
                  >
                    SHOP HERE
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
