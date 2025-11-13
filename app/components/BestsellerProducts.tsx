'use client'

import HomeSwiperTemplate from "./HomeSwiperTemplate";
import HomeSection from "./HomeSection";
import ProductBox from "./ProductBox";
import { SwiperSlide } from "swiper/react";

function BestsellerProducts() {
  return (
    <HomeSection href="/" title="پرفروش ترین کتاب‌های">
      <HomeSwiperTemplate isAutoplay>
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
