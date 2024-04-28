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
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/1.jpg?v=1684976776"
            alt="menu"
            className="h-full object-cover"
            width={1920}
            height={940}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/2.jpg?v=1684976776"
            alt="menu"
            className="h-full object-cover"
            width={1920}
            height={940}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/3.jpg?v=1684976777"
            alt="menu"
            className="h-full object-cover"
            width={1920}
            height={940}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/4.jpg?v=1684976777"
            alt="menu"
            className="h-full object-cover"
            width={1920}
            height={940}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/5.jpg?v=1684976777"
            alt="menu"
            className="h-full object-cover"
            width={1920}
            height={940}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/6.jpg?v=1684976776"
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
