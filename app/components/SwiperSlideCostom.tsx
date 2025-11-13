"use client";
import { ReactNode } from "react";
import { SwiperSlide } from "swiper/react";

function SwiperSlideCostom({ children }: { children: ReactNode }) {
  return <SwiperSlide>{children}</SwiperSlide>;
}

export default SwiperSlideCostom;
