import CartItem from "./components/CartItem";
import Container from "@/components/Container";
import CartPaymentsBox from "./components/CartPaymentsBox";
import CartPaymentsBoxNav from "./components/CartPaymentsBoxNav";

function page() {
  return (
    <Container styles="pt-10">
      <div className="p-nav grid grid-cols-12">
        <div className="xl:col-span-9 lg:col-span-8 col-span-full xl:me-10 lg:me-6 me-0 h-screen">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="lg:block hidden xl:col-span-3 lg:col-span-4 relative pt-4">
          <CartPaymentsBox />
        </div>
        <div className="lg:hidden block z-1">
          <CartPaymentsBoxNav />
        </div>
      </div>
    </Container>
  );
}

export default page;
