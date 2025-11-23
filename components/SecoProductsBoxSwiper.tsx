"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SecoProductBox from "./SecoProductBox";
import DiscountBox from "./DiscountBox";
import { Navigation } from "swiper/modules";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import SeeMore from "./SeeMore";
import { ReactNode } from "react";

interface I_Props {
  maxSlide: number;
  isFull?: boolean;
  title: ReactNode;
  bgColor: string;
  textColor?: string;
  bgOpacity?: number;
  maxDiscount?: number;
}

function SecoProductsBoxSwiper({ maxSlide, isFull, title, bgColor, textColor="#fff", bgOpacity = 100, maxDiscount = 0 }: I_Props) {
  return (
    <section className={`secoProductsBoxSwiper lg:px-4 relative overflow-hidden`}>
      {maxDiscount !== 0 && (
        <div className="absolute -top-22 -left-10 text-[24rem] text-white/20 font-bold">
          %
        </div>
      )}
      <div
        style={{ backgroundColor: `color-mix(in oklab, ${bgColor} ${bgOpacity}%, transparent)` }}
        className={`${maxDiscount ? "lg:px-0 px-4" : "px-8"} flex-col items-center justify-between py-5 lg:rounded-2xl bg-amber-50/40`}
      >
        <div style={{ color: textColor }} className={`${maxDiscount ? "lg:hidden mb-4" : "mb-6 mt-2"} flex items-center justify-between gap-2`}>
          <div className="sm:text-xl text-lg font-[dana-db]">
            {title}
          </div>
          <div className="sm:text-sm text-xs flex items-center gap-1">
            <div>همه کتاب‌ها</div>
            <div className="size-3 mb-0.5">
              <ArrowDownIcon styles={{ rotate: "90deg" }} />
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            500: {
              slidesPerView: Number(maxSlide.toFixed(0)) - 4,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: Number(maxSlide.toFixed(0)) - 2,
              spaceBetween: 8,
            },
            1024: {
              slidesPerView: Number(maxSlide.toFixed(0)) - 1,
              spaceBetween: 9,
            },
            1300: {
              slidesPerView: Number(maxSlide.toFixed(0)),
              spaceBetween: 10,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-full pe-24"
        >
          {maxDiscount !== 0 && (
            <SwiperSlide className="lg:block! hidden!">
              <div className="flex flex-col justify-between gap-6 items-center lg:py-4 py-3">
                <div className="flex flex-col justify-center text-white text-2xl font-[dana-db]">
                  <div className="text-center">پیشـنهاد</div>
                  <div className="text-center">شگـفـت</div>
                  <div className="text-center">انـگـیــز</div>
                </div>
                <div className="relative flex gap-4 items-center justify-center">
                  <DiscountBox
                    color="#ffffff"
                    discount={maxDiscount}
                    size="lg"
                    styles="relative! right-1/2 translate-x-1/2"
                  />
                  <div className="text-black/40 absolute top-0 right-0 text-2xl">
                    تا
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )}
          <SwiperSlide>
            <SecoProductBox
              href="/"
              image="Atomic-Habits.webp"
              index={0}
              listLenght={11}
              discount={20}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SecoProductBox
              href="/"
              image="The-Advice-Trap.webp"
              index={1}
              listLenght={11}
              discount={33}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SecoProductBox
              href="/"
              image="Slow-Productivity.jpg"
              index={2}
              listLenght={11}
              discount={40}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SecoProductBox
              href="/"
              image="Negotiation-by-Max-Bazerman.jpg"
              index={3}
              listLenght={11}
              discount={20}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SecoProductBox
              href="/"
              image="Hidden-Potential.webp"
              index={4}
              listLenght={11}
              discount={20}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SecoProductBox
              href="/"
              image="Factfulness.webp"
              index={5}
              listLenght={11}
              discount={5}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SecoProductBox
              href="/"
              image="Deep-Work.webp"
              index={6}
              listLenght={11}
              discount={20}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SecoProductBox
              href="/"
              image="Build.webp"
              index={7}
              listLenght={11}
              discount={10}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SecoProductBox
              href="/"
              image="Slow-Productivity.jpg"
              index={8}
              listLenght={11}
              discount={5}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SecoProductBox
              href="/"
              image="Atomic-Habits.webp"
              index={9}
              listLenght={11}
              discount={20}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SecoProductBox
              href="/"
              image="Negotiation-by-Max-Bazerman.jpg"
              index={10}
              listLenght={11}
              discount={33}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SeeMore href="/" styles={`${isFull ? "h-[237px]" : "h-[221px]"} bg-white/85`} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default SecoProductsBoxSwiper;
