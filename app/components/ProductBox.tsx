import Button from "./designSystem/Button";
import CartIcon from "./icons/CartIcon";

function ProductBox() {
  return (
    <div className="bg-white rounded-xl shadow-xl/3 overflow-hidden">
      <div className="bg-(--prim)/5">
        <div className="py-4 w-fit mx-auto"><img className="max-h-44 shadow-lg/5 object-cover rounded-xl" src="/images/Atomic-Habits.webp" alt="" /></div>
      </div>
      <div className="p-4 pt-2 pb-2">
        <div className="font-[dana-b] text-lg">عادت های اتمی</div>
        <div className="flex pt-2 justify-between items-center">
          <div className="text-neutral-700 text-sm">جیمز کلیر</div>
          <div>
            <div className="leading-2 line-through text-neutral-400 text-sm">
              <div className="font-[iransans] font-bol">{(200000).toLocaleString()}</div>
            </div>
            <div className="flex gap-px items-center">
              <div className="font-[iransans] font-bold">{(180000).toLocaleString()}</div>
              <div className="text-xs">تومان</div>
            </div>
          </div>
        </div>
        <div>
          <Button className="cart-button overflow-x-hidden max-w-32 mx-auto gap-1 mt-3 px-4 py-2 bg-(--prim)! text-sm rounded-lg text-white">
            <div className="cart-button-rail flex items-center justify-between min-w-40">
              <div className="duration-300 cart-button-text">مشاهده و خرید</div>
              <div className="duration-300 cart-button-icon size-5">
                <CartIcon />
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
