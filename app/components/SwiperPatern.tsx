"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";

import { EffectFade, Navigation } from "swiper/modules";
import { Span } from "next/dist/trace";
import Button from "./designSystem/Button";
import ArrowIcon from "./icons/ArrowIcon";
import LandingItem from "./LandingItem";

export default function SwiperPatern() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <LandingItem
            title="عادت‌های اتمی"
            href=""
            color="amber-700"
            discount="20"
            image="Atomic-Habits.webp"
            shortDiscription="تغیرات کوچک نتایج بزرگ، تکنیک های ارزشمند برای هرروز یک درصد بهتر شدن"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LandingItem
            title="مدیران بزرگ بدنیا نمی‌آیند ساخته میشوند"
            href=""
            color="teal-600"
            discount="15"
            image="مدیران-بزرگ-ورژن-2025.webp"
            shortDiscription="تکنیک های ساده ولی ارزشمند برای تبدیل شد به رهبری موفق"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
