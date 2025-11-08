import Link from "next/link";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import ProductBox from "./ProductBox";

function LatestProducts() {
  return (
    <section className="mt-18">
      <div className="flex justify-between items-end mb-9">
        <div className="relative">
          <div className="text-[22px] font-[dana-xb]">داغ ترین کتاب‌‌های <span className="text-(--seco)">پـرشین بـوکـــ</span></div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-6 w-[calc(100%-100px)] h-7 bg-linear-to-l from-(--prim)/20 -z-1">
              <div className="absolute top-0 -right-4 size-7 rotate-45 bg-background"></div>
          </div>
        </div>
        <Link href='/' className="text-sm text-(--seco) hover:text-(--prim) flex items-center gap-1">
          <div className="font-[dana-db]">همه کتاب‌ها</div>
          <div className="size-3.5 mb-0.5">
            <ArrowDownIcon styles={{ rotate: "90deg" }} />
          </div>
        </Link>
      </div>
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
    </section>
  );
}

export default LatestProducts;
