import Container from "./Container";
import Button from "./designSystem/Button";
import Price from "./Price";

function PaymentsBoxNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/60 backdrop-blur-sm border-t border-black/10 lg:py-4 pt-2.5 pb-2">
      <Container>
        <div className="w-full! flex justify-between items-center">
          <div className="w-1/2">
            <Button className="text-sm sm:py-3.5 py-3 px-4 w-full! min-w-38! rounded-lg! text-white bg-(--prim)! hover:bg-(--prim)/90!">
              <div className="duration-300">افزودن به سبد خرید</div>
            </Button>
          </div>
          <div>
            <div className="flex justify-between gap-1 items-center">
              <div className="text-sm font-[dana-b] bg-(--prim) px-2 rounded-full text-white pt-px h-[19px]"><span className="font-[iransans] text-[13px] ms-px text-white!">74</span>%</div>
              <div className="discount">{(250000).toLocaleString()}</div>
            </div>
            <Price price={250000} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PaymentsBoxNav;
