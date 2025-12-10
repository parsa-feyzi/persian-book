import SortingBox from "@/components/SortingBox";
import FilterBox from "./components/FilterBox";
import Container from "@/components/Container";
import ProductBox from "@/components/ProductBox";

function page() {
  return (
    <Container styles="pt-16">
      <div className="p-nav grid grid-cols-12">
        <div className="col-span-3 relative me-6">
          <FilterBox />
        </div>
        <div className="col-span-9 ms-6">
          <SortingBox
            itemsNumber={85}
            label="کتابــ"
            tabs={[
              { title: "پربازدیدترین", href: "se", isActive: true },
              { title: "پربازدیدترین", href: "see" },
              { title: "پربازدیدترین", href: "seee" },
              { title: "پربازدیدترین", href: "seeee" },
              { title: "پربازدیدترین", href: "seeeee" },
            ]}
          />
          <div className="grid grid_auto_fit lg:gap-8 sm:gap-6 gap-4 mt-6">
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default page;
