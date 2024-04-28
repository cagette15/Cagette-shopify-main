'use client';

import Image from 'next/image';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function DeliSliderTwo() {
  return (
    <>
      <Swiper
        loop={true}
        speed={2600}
        centeredSlides={true}
        spaceBetween={0}
        autoplay={{
          delay: 3500,
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
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/wine1.webp?v=1685500243"
            alt="wine cagette"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1024}
            height={716}
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/wine2.webp?v=1685500243"
            alt="wine cagette"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
