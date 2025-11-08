"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DiscountBox from "./DiscountBox";
import DiscountedProductBox from "./DiscountedProductBox";
import ArrowDownIcon from "./icons/ArrowDownIcon";

function DiscountedProductsSwiper() {
  return (
    <section className="discountedProductsSwiper relative overflow-hidden lg:px-4">
      <div className="absolute -top-22 -left-10 text-[24rem] text-white/20 font-bold">%</div>
      <div className="flex-col items-center justify-between py-5 lg:rounded-2xl bg-(--prim)/50 lg:px-0 px-4">
        <div className="lg:hidden pb-4 text-white flex items-center justify-between gap-2">
          <div className="sm:text-xl text-lg font-[dana-db]">پیشـنهاد شگـفت انگـیـز</div>
          <div className="text-sm flex items-center gap-1">
            <div>همه کتاب‌ها</div>
            <div className="size-3 mb-0.5"><ArrowDownIcon styles={{ rotate: "90deg" }} /></div>
          </div>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            500: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 5,
              spaceBetween: 8,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 9,
            },
            1300: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-full pe-24"
        >
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
                  discount={10}
                  size="lg"
                  styles="relative! right-1/2 translate-x-1/2"
                />
                <div className="text-black/40 absolute top-0 right-0 text-2xl">
                  تا
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <DiscountedProductBox
              href="/"
              image="Atomic-Habits.webp"
              index={0}
              listLenght={11}
              discount={20}
            />
          </SwiperSlide>
          <SwiperSlide>
            <DiscountedProductBox
              href="/"
              image="The-Advice-Trap.webp"
              index={1}
              listLenght={11}
              discount={33}
            />
          </SwiperSlide>
          <SwiperSlide>
            <DiscountedProductBox
              href="/"
              image="Slow-Productivity.jpg"
              index={2}
              listLenght={11}
              discount={40}
            />
          </SwiperSlide>
          <SwiperSlide>
            <DiscountedProductBox
              href="/"
              image="Negotiation-by-Max-Bazerman.jpg"
              index={3}
              listLenght={11}
              discount={20}
            />
          </SwiperSlide>
          <SwiperSlide>
            <DiscountedProductBox
              href="/"
              image="Hidden-Potential.webp"
              index={4}
              listLenght={11}
              discount={20}
            />
          </SwiperSlide>
          <SwiperSlide>
            <DiscountedProductBox
              href="/"
              image="Factfulness.webp"
              index={5}
              listLenght={11}
              discount={5}
            />
          </SwiperSlide>
          <SwiperSlide>
            <DiscountedProductBox
              href="/"
              image="Deep-Work.webp"
              index={6}
              listLenght={11}
              discount={20}
            />
          </SwiperSlide>
          <SwiperSlide>
            <DiscountedProductBox
              href="/"
              image="Build.webp"
              index={7}
              listLenght={11}
              discount={10}
            />
          </SwiperSlide>
          <SwiperSlide>
            <DiscountedProductBox
              href="/"
              image="Slow-Productivity.jpg"
              index={8}
              listLenght={11}
              discount={5}
            />
          </SwiperSlide>
          <SwiperSlide>
            <DiscountedProductBox
              href="/"
              image="Atomic-Habits.webp"
              index={9}
              listLenght={11}
              discount={20}
            />
          </SwiperSlide>
          <SwiperSlide>
            <DiscountedProductBox
              href="/"
              image="Negotiation-by-Max-Bazerman.jpg"
              index={10}
              listLenght={11}
              discount={33}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default DiscountedProductsSwiper;
