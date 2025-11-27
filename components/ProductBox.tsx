import Link from "next/link";
import Price from "./Price";

function ProductBox() {
  return (
    <div className="bg-white border border-(--seco)/20 rounded-xl  overflow-hidden">
      <div className="bg-(--base)">
        <Link href={"/product/1"} className="py-4 w-fit mx-auto block">
          <img
            className="max-h-42 sm:h-auto h-34 shadow-lg/5 object-cover rounded-xl"
            src="/images/Atomic-Habits.webp"
            alt={""}
          />
        </Link>
      </div>
      <div className="sm:p-4 p-2 pt-3! pb-3!">
        <Link href={"/product/1"} className="font-[dana-db] block text-[15px]!">
          عادت‌های اتمی اثر جیمز کلیر انتشارات نشرنوین
        </Link>
        <div className="flex pt-2 justify-between items-end">
          <div>
            <div className="discount text-[13px]! translate-y-2.5">{(250000).toLocaleString()}</div>
            <div className="price">
              <Price price={250000} styles="text-[17px]! items-end" />
            </div>
          </div>
          <div className="text-sm font-[dana-b] bg-(--prim) px-2 rounded-full text-white h-[21px] pt-px">
            <span className="font-[iransans] font-bold ms-px text-white!">
              74
            </span>
            %
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
