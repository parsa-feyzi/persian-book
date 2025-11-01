"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductBox from "./ProductBox";
import DiscountBox from "./DiscountBox";

function DiscountedProductsSwiper() {
  return (
    <section className="discountedProductsSwiper">
      <div className="flex items-center justify-between py-6 rounded-2xl bg-(--prim)/60">
        {/* <div className="px-12 py-4">
          <div className="flex flex-col justify-center text-white text-3xl">
            <div className="text-center">پیشنهاد</div>
            <div className="text-center">شگفت</div>
            <div className="text-center">انگیز</div>
          </div>
          <div className="relative pt-8 flex gap-4 items-center">
            <DiscountBox color="#fdfffe" discount={10} size="lg" styles="top-4 right-3" />
            <div className="text-xl">تا</div>
          </div>
        </div> */}
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              // spaceBetween: 40,
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
          className="mySwiper w-full pe-24"
        >
          <SwiperSlide>
            <div className="py-16">
              
              <div className="flex flex-col justify-center text-white text-4xl">
                <div className="text-center">پیشنهاد</div>
                <div className="text-center">شگفت</div>
                <div className="text-center">انگیز</div>
              </div>
              <div className="relative pt-8 flex gap-4 items-center justify-center">
                <DiscountBox
                  color="#ffffff"
                  discount={10}
                  size="lg"
                  styles="top-8 right-1/2 translate-x-1/2"
                />
                <div className="absolute top-12 right-16 text-2xl">تا</div>
              </div>
            </div>
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
        </Swiper>
      </div>
    </section>
  );
}

export default DiscountedProductsSwiper;
