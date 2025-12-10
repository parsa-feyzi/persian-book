import Link from "next/link";
import Button from "../designSystem/Button";
import Price from "../Price";
import NavCartModalItem from "./NavCartModalItem";

function NavCartModal() {
  return (
    <div className="sm:w-100 w-[90vw] z-20 overflow-hidden bg-white top-14 left-0 rounded-lg absolute">
      <div className="p-4 bg-(--base)/50 flex justify-between items-center">
        <div className="font-[dana-b] text-(--prim)">سبد خرید من</div>
        <div className="text-sm font-[dana-b] text-black/50">
          <span className="font-[iransans] text-lg font-bold pe-1">2</span>
          کتاب
        </div>
      </div>
      <div className="py-4">
        <div className="nav_cart_modal_content_container max-h-58 overflow-auto me-1">
          <NavCartModalItem />
          <NavCartModalItem />
        </div>
      </div>
      <div className="relative grid grid-cols-2 bg-white px-4 py-3 border-t border-black/10">
        <div>
          <div className="text-black/40 mb-px text-xs">مبلغ قابل پرداخت</div>
          <Price price={250000} />
        </div>
        <Link href={"/cart"} className="flex blok items-center"><Button btnType="primary" className="w-full">{false ? "ثبت سفارشات" : "ثبت سفارش"}</Button></Link>
      </div>
    </div>
  );
}

export default NavCartModal;
