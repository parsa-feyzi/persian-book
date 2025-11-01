import CategoriesBox from "./components/CategoriesSwiperBox";
import LandingSwiper from "./components/LandingSwiper";

export default async function Home() {
  return (
    <div className="md:pt-19.5 pt-16">
      <LandingSwiper />
      <div className="px-[6vw]">
        <div className="">
          <CategoriesBox />
          {/* <div>new books</div> */}
        </div>
      </div>
    </div>
  );
}
