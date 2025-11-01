import Button from "./designSystem/Button";

function ProductBox() {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="bg-(--prim)/5">
        <div className="py-4 w-fit mx-auto"><img className="max-h-48 shadow-lg/5 object-cover rounded-xl" src="/images/Atomic-Habits.webp" alt="" /></div>
      </div>
      <div className="p-4 pt-2 pb-2">
        <div className="font-[dana-b] text-lg">عادت های اتمی</div>
        <div className="flex pt-4 justify-between items-center">
          <div className="text-neutral-700 text-sm">جیمز کلیر</div>
          <div>
            <div className="leading-2 line-through text-neutral-500 text-sm">
              <div>{(200000).toLocaleString()}</div>
            </div>
            <div className="flex gap-px items-center">
              <div>{(180000).toLocaleString()}</div>
              <div className="text-xs">تومان</div>
            </div>
          </div>
        </div>
        <div>
          <Button className="mx-auto mt-3 px-4 py-1.5 bg-(--prim)! hover:bg-(--prim)/80! text-sm text-white">مشاهده و خرید</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
