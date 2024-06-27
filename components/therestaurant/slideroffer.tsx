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
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/1_6da1bc47-696e-473a-907e-b5ce704448f7.png?v=1719428216"
            alt="monday menu"
            className="w-full object-cover"
            width={1080}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/Tuesday.webp?v=1684981095"
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/2_8ebb5dd9-10fa-4418-8ae6-449ba986b0a0.png?v=1719428188"
            alt="Tuesday menu"
            className="w-full object-cover"
            width={1080}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/Wednesday.webp?v=1684981095"
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/3.png?v=1719428166"
            alt="Wednesday menu"
            className="w-full object-cover"
            width={1080}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/Thursday.webp?v=1684981095"
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/4.png?v=1719428141"
            alt="Thursday menu"
            className="w-full object-cover"
            width={1080}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/Friday.webp?v=1684981095"
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/5.png?v=1719428220"
            alt="Friday menu"
            className="w-full object-cover"
            width={1080}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/Saturday.webp?v=1684981095"
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/6.png?v=1719428212"
            alt="Saturday menu"
            className="w-full object-cover"
            width={1080}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            // src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/7.webp?v=1684981096"
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/7.png?v=1719428189"
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
