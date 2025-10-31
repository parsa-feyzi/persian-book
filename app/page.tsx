import CategoriesBox from "./components/CategoriesBox";
import LandingSwiper from "./components/LandingSwiper";

export default async function Home() {
  return (
    <div className="md:pt-19.5 pt-16">
      <LandingSwiper />
      <div className="px-[6vw]">
        <div className="border-t-2 border-neutral-500/15 mt-6 pt-6">
          <CategoriesBox />
          {/* <div>new books</div> */}
        </div>
      </div>
    </div>
  );
}
