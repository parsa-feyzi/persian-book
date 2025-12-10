import Image from "next/image";
import Link from "next/link";
import Price from "../Price";
import QuantityBox from "../QuantityBox";

function NavCartModalItem() {
  return (
      <div className={`border-b mx-2 border-black/5 py-4 px-2 flex items-center gap-3`}>
        <Link href={"/"} className="relative w-24 h-32 pry_border rounded-lg min-w-24">
          <Image
            fill
            className="size-full rounded-lg"
            src={`/images/Atomic-Habits.webp`}
            alt=""
          />
        </Link>
        <div className="flex pt-4 flex-col justify-between h-32">
          <Link href={"/"} className="font-[dana-db] mb-0.5 line-clamp-2">
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

export default NavCartModalItem;
