"use client";
import { ReactNode } from "react";

import { SwiperSlide } from "swiper/react";


function SwiperSlideCustom({ children }: { children: ReactNode }) {
  return <SwiperSlide>{children}</SwiperSlide>;
}

export default SwiperSlideCustom;
