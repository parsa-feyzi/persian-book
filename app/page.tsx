import BestsellerProducts from "./components/BestsellerProducts";
import CategoriesSwiperBox from "./components/CategoriesSwiperBox";
import Container from "./components/Container";
import DiscountedProductsSwiper from "./components/DiscountedProductsSwiper";
import LandingSwiper from "./components/LandingSwiper";
import LatestProducts from "./components/LatestProducts";
import PersoneDevBooks from "./components/PersoneDevBooks";

export default async function Home() {
  return (
    <div className="md:pt-19.5 pt-16">
      <LandingSwiper />
      <div className="">
        <CategoriesSwiperBox />
        <DiscountedProductsSwiper />
        <Container>
          <LatestProducts />
          <BestsellerProducts />
          <PersoneDevBooks />
        </Container>
      </div>
    </div>
  );
}
