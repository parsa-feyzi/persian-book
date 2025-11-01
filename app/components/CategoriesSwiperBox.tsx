"use client"

import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import CategoryBox from "./CategoryBox"
import LeafIcon from "./icons/LeafIcon"

function CategoriesSwiperBox() {
  return (
    <section className="categoriesSwiper border-t-2 border-neutral-500/15 my-6 py-12">
      <Swiper
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 6,
            // spaceBetween: 40,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 20,
          },
        }}
        dir="rtl"
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CategoryBox logo={<LeafIcon />} href="personal-dev" title="توسعه فردی" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryBox logo={<LeafIcon />} href="personal-dev" title="وسعه فردی" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryBox logo={<LeafIcon />} href="personal-dev" title="توسعه فردن" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryBox logo={<LeafIcon />} href="personal-dev" title="توسعه فرد" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryBox logo={<LeafIcon />} href="personal-dev" title="توسعفردی" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryBox logo={<LeafIcon />} href="personal-dev" title="توسع فردی" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryBox logo={<LeafIcon />} href="personal-dev" title="توسع ه فردی" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryBox logo={<LeafIcon />} href="personal-dev" title="توسعه فردی" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default CategoriesSwiperBox