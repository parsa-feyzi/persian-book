"use client"

import { SwiperSlide } from "swiper/react";
import HomeSwiperTemplate from "./HomeSwiperTemplate";
import HomeSection from "./HomeSection";
import ProductBox from "./ProductBox";

function BestsellerProducts() {
  return (
    <HomeSection href="/" title="پرفروش ترین کتاب‌های">
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
      </HomeSwiperTemplate>
    </HomeSection>
  );
}

export default BestsellerProducts;
