import Link from "next/link";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import ProductBox from "./ProductBox";
import HomeSection from "./HomeSection";

function LatestProducts() {
  return (
    <HomeSection title="داغ ترین کتاب‌‌های" href="/">
      <div
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(14rem, auto))" }}
        className="grid lg:gap-8 gap-6"
      >
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
