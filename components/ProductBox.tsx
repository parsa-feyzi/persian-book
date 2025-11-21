import Link from "next/link";
import Button from "./designSystem/Button";
import CartIcon from "./icons/CartIcon";

function ProductBox() {
  return (
    <div className="bg-white rounded-xl shadow-xl/3 overflow-hidden">
      <div className="bg-(--prim)/5">
        <Link href={"/product/1"} className="py-4 w-fit mx-auto block"><img className="max-h-44 sm:h-auto h-34 shadow-lg/5 object-cover rounded-xl" src="/images/Atomic-Habits.webp" alt="" /></Link>
      </div>
      <div className="sm:p-4 p-2 pt-2 pb-2">
        <Link href={"/product/1"} className="font-[dana-b] block sm:text-lg">عادت های اتمی</Link>
        <div className="flex pt-2 justify-between items-center">
          <div className="text-neutral-700 sm:text-sm text-xs">جیمز کلیر</div>
          <div>
            <div className="sm:leading-2 leading-1 line-through text-neutral-400 sm:text-sm text-xs">
              <div className="font-[iransans] font-bol">{(200000).toLocaleString()}</div>
            </div>
            <div className="flex gap-px items-end">
              <div className="font-[iransans] sm:text-base text-sm font-bold">{(180000).toLocaleString()}</div>
              <div className="sm:text-xs text-[10px]">تومان</div>
            </div>
          </div>
        </div>
        <div>
          <Link href={"/product/1"}>
            <Button className="cart-button overflow-x-hidden sm:max-w-32 max-w-28 mx-auto gap-1 mt-3 px-4 sm:py-2 py-1.5 bg-(--prim)! sm:text-sm text-[13px] rounded-lg text-white">
              <div className="cart-button-rail flex items-center justify-between min-w-40">
                <div className="duration-300 cart-button-text sm:text-sm">مشاهده و خرید</div>
                <div className="duration-300 cart-button-icon sm:size-5 size-4.5">
                  <CartIcon />
                </div>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
