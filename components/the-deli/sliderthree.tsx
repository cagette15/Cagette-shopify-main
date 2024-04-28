'use client';

import Image from 'next/image';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function DeliSliderThree() {
  return (
    <>
      <Swiper
        loop={true}
        speed={2600}
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
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/private1-1024x716.jpg?v=1686630578"
            alt="wine cagette"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1024}
            height={716}
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/private2-1024x716.jpg?v=1686630817"
            alt="private wine event cagette"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1024}
            height={716}
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/private3-1024x716.jpg?v=1686630925"
            alt="private wine event cagette"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
