'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export function RestauSlider() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide>
          <Image
            // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/1.jpg?v=1684976776"
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/4_a867edb7-597a-4d04-b75b-7a3600cb3003.png?v=1719430044"
            alt="menu"
            className="h-full object-cover"
            width={1920}
            height={940}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/2.jpg?v=1684976776"
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/5_4c23fe30-7101-4e7b-8d1a-1ab6471c155b.png?v=1719430038"
            alt="menu"
            className="h-full object-cover"
            width={1920}
            height={940}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/3.jpg?v=1684976777"
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/6_089e2a99-88ed-4354-b9d7-66cc618b557c.png?v=1719430042"
            alt="menu"
            className="h-full object-cover"
            width={1920}
            height={940}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/4.jpg?v=1684976777"
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/7_a9c496fb-2b64-4238-9ff2-261d4eb92959.png?v=1719430038"
            alt="menu"
            className="h-full object-cover"
            width={1920}
            height={940}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/8.png?v=1719430044"
            // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/5.jpg?v=1684976777"
            alt="menu"
            className="h-full object-cover"
            width={1920}
            height={940}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/6.jpg?v=1684976776"
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/9.png?v=1719430041"
            alt="menu"
            className="h-full object-cover"
            width={1920}
            height={940}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/7.jpg?v=1684976777"
            alt="menu"
            className="h-full object-cover"
            width={1920}
            height={940}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
