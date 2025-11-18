'use client'

import { SwiperSlide } from "swiper/react";
import HomeSection from "./HomeSection";
import HomeSwiperTemplate from "./HomeSwiperTemplate";
import ProductBox from "./ProductBox";
import SeeMore from "./SeeMore";

function PersoneDevBooks() {
  return (
    <HomeSection title="بهترین کتاب‌های توسعه فردی" href="/">
      <HomeSwiperTemplate>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <SeeMore href="/" styles="h-[355px] bg-white" />
        </SwiperSlide>
      </HomeSwiperTemplate>
    </HomeSection>
  );
}

export default PersoneDevBooks;
