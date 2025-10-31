"use client"

import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import CategoryBox from "./CategoryBox"

function CategoriesBox() {
  return (
    <section>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CategoryBox logo={"mm"} href="personal-dev" title="توسعه فردی" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default CategoriesBox