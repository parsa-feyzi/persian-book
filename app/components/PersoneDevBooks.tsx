'use client'

import { SwiperSlide } from "swiper/react";
import HomeSection from "./HomeSection";
import HomeSwiperTemplate from "./HomeSwiperTemplate";
import ProductBox from "./ProductBox";

function PersoneDevBooks() {
  return (
    <HomeSection title="بهترین کتاب های توسعه فردی" href="/">
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

export default PersoneDevBooks;
