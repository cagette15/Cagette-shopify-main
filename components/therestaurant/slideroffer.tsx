'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export function RestauSliderOffer() {
  return (
    <>
      <Swiper
        loop={true}
        speed={2200}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        spaceBetween={10}
        pagination={{
          clickable: true
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50
          }
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Image
            // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/Monday.webp?v=1684981095"
             src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/DAILY_SPECIALS.png?v=1745988414"
            alt="monday menu"
            className="w-full object-cover"
            width={1080}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/Tuesday.webp?v=1684981095"
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/4_743963e2-967d-48ea-9245-2b3448a6f56d.png?v=1736246563"
            alt="Tuesday menu"
            className="w-full object-cover"
            width={1080}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/Wednesday.webp?v=1684981095"
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/7_e44e09d5-f791-4b09-9c09-3b330c9f8265.png?v=1736246563"
            alt="Wednesday menu"
            className="w-full object-cover"
            width={1080}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/Thursday.webp?v=1684981095"
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/3_f47c67fd-7658-4cf5-b1c0-a8f746530fe6.png?v=1736246564"
            alt="Thursday menu"
            className="w-full object-cover"
            width={1080}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/Friday.webp?v=1684981095"
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/6_8be9202a-f81f-4a8d-be43-b79f4bafb669.png?v=1736246564"
            alt="Friday menu"
            className="w-full object-cover"
            width={1080}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/Saturday.webp?v=1684981095"
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/2_f0726717-6442-431b-afcd-5d17ff92f8ed.png?v=1736246565"
            alt="Saturday menu"
            className="w-full object-cover"
            width={1080}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/7.webp?v=1684981096"
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/5_0d6773a3-6440-4138-998e-eadea5398852.png?v=1736246565"
            alt="Sunday menu"
            className="w-full object-cover"
            width={1080}
            height={1080}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
