import SortingBox from "@/components/SortingBox";
import FilterBox from "./components/FilterBox";
import Container from "@/components/Container";

function page() {
  return (
    <Container styles="pt-1">
      <div className="p-nav relative grid grid-cols-12">
        <div className="col-span-3 me-6">
          <FilterBox />
        </div>
        <div className="col-span-9">
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
          <div></div>
        </div>
      </div>
    </Container>
  );
}

export default page;
