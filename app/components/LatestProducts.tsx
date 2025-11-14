import Link from "next/link";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import ProductBox from "./ProductBox";
import HomeSection from "./HomeSection";

function LatestProducts() {
  return (
    <HomeSection title="داغ ترین کتاب‌‌های" href="/">
      <div className="grid grid_auto_fit lg:gap-8 sm:gap-6 gap-4">
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
      </div>
    </HomeSection>
  );
}

export default LatestProducts;
