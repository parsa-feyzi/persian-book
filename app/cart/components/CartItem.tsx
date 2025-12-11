import Price from "@/components/Price";
import QuantityBox from "@/components/QuantityBox";
import Image from "next/image";
import Link from "next/link";

function CartItem() {
  return (
    <div
      className={`grid grid-cols-12 border-b border-black/5 py-6 px-2 gap-5`}
    >
      <Link
        href={"/product/1"}
        className="block xl:col-span-2 col-span-3 relative w-30 h-40 pry_border rounded-lg"
      >
        <Image
          fill
          className="size-full rounded-lg"
          src={`/images/Atomic-Habits.webp`}
          alt=""
        />
      </Link>
      <div className="xl:col-span-10 col-span-9 flex pt-6 flex-col justify-between h-40">
        <Link href={"/"} className="text-lg font-[dana-db] mb-0.5 line-clamp-2">
          کتاب عادت‌های اتمی اثر جیمز کلیر انشارات نشر نوین
        </Link>
        <div className="flex mt-auto w-full justify-between items-center">
          <div>
            <QuantityBox initialCount={1} />
          </div>
          <div className="text-black/50 text-sm">
            {true ? (
              <Price price={250000} size="md" discount={10} />
            ) : (
              <div>رایگان!</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
