import BestsellerProducts from "@/components/HomeComponents/BestsellerProducts";
import CategoriesSwiperBox from "@/components/HomeComponents/CategoriesSwiperBox";
import Container from "@/components/Container";
import LandingSwiper from "@/components/HomeComponents/LandingSwiper";
import LatestProducts from "@/components/HomeComponents/LatestProducts";
import PersoneDevBooks from "@/components/HomeComponents/PersoneDevBooks";
import SecoProductsBoxSwiper from "@/components/SecoProductsBoxSwiper";

export default async function Home() {
  return (
    <div className="p-nav">
      <LandingSwiper />
      <div className="">
        <CategoriesSwiperBox />
        <SecoProductsBoxSwiper
          title="پیشنهاد شگفت انگیز"
          linkToAll="/"
          maxSlide={7}
          isFull
          bgColor="var(--prim)"
          bgOpacity={35}
          maxDiscount={33}
        />
        <Container>
          <LatestProducts />
          <BestsellerProducts />
          <PersoneDevBooks />
          <PersoneDevBooks />
          <PersoneDevBooks />
          <PersoneDevBooks />
        </Container>
      </div>
    </div>
  );
}
