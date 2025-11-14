"use client";

import { ReactNode } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";

interface I_Props {
  isAutoplay?: boolean;
  children: ReactNode;
}

function HomeSwiperTemplate({ isAutoplay, children }: I_Props) {
  return (
    <>
      <section className="home_swiper_template relative">
        {isAutoplay ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              440: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              780: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1300: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper w-full [440px]:px-0! px-8!"
          >
            {children}
          </Swiper>
        ) : (
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              440: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              780: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1300: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper w-full [440px]:px-0! px-8!"
          >
            {children}
          </Swiper>
        )}
      </section>
    </>
  );
}

export default HomeSwiperTemplate;
