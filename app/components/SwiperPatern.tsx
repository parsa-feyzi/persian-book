"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import LandingItem from "./LandingItem";

export default function SwiperPatern() {
  return (
    <div className="-z-10">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <LandingItem
            title="عادت‌های اتمی"
            href=""
            color="#cd4400"
            discount="20"
            image="Atomic-Habits.webp"
            shortDiscription="تغیرات کوچک نتایج بزرگ، تکنیک های ارزشمند برای هرروز یک درصد بهتر شدن"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LandingItem
            title="مدیران بزرگ بدنیا نمی‌آیند ساخته میشوند"
            href=""
            color="#0b9993"
            discount="15"
            image="مدیران-بزرگ-ورژن-2025.webp"
            shortDiscription="تکنیک های ساده ولی ارزشمند برای تبدیل شد به رهبری موفق"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LandingItem
            title="مذاکره"
            href=""
            color="#ff005b"
            discount="15"
            image="Negotiation-by-Max-Bazerman.jpg"
            shortDiscription="بازی تغییر کرده است و دیگر نمی‌توان با تاکتیک‌های دیروز، در مذاکره‌های امروزی پیروز شد"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
