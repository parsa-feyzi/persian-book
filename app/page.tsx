import BestsellerProducts from "@/components/BestsellerProducts";
import CategoriesSwiperBox from "@/components/CategoriesSwiperBox";
import Container from "@/components/Container";

import LandingSwiper from "@/components/LandingSwiper";
import LatestProducts from "@/components/LatestProducts";
import PersoneDevBooks from "@/components/PersoneDevBooks";
import SecoProductsBoxSwiper from "@/components/SecoProductsBoxSwiper";

export default async function Home() {
  return (
    <div className="p-nav">
      <LandingSwiper />
      <div className="">
        <CategoriesSwiperBox />
        <SecoProductsBoxSwiper title="پیشنهاد شگفت انگیز" maxSlide={7} isFull bgColor="var(--prim)" bgOpacity={50} maxDiscount={33} />
        <Container>
          <LatestProducts />
          <BestsellerProducts />
          <PersoneDevBooks />
        </Container>
      </div>
    </div>
  );
}
