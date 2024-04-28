'use client';

import Image from 'next/image';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function DeliSliderOne() {
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
          <Image
            width={1024}
            height={716}
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/deli1-1024x716.webp?v=1685429265"
            alt="deli cagette"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1024}
            height={716}
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/deli2-1024x716.webp?v=1685429265"
            alt="deli cagette"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1024}
            height={716}
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/deli3-1024x716.webp?v=1685429265"
            alt="deli cagette"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1024}
            height={716}
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/deli4-1024x716.webp?v=1685429265"
            alt="deli cagette"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1024}
            height={716}
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/deli5-1024x716.webp?v=1685429266"
            alt="deli cagette"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1024}
            height={716}
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/deli6-1024x716.webp?v=1685429265"
            alt="deli cagette"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1024}
            height={716}
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/deli7-1024x716.webp?v=1685429265"
            alt="deli cagette"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
