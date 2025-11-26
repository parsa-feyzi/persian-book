import Link from "next/link";
import CirkelArrowIcon from "./icons/CirkelArrowIcon";

interface I_Props { href: string, styles: string }

function SeeMore({ href, styles }: I_Props) {
  return (
    <Link
      href={href}
      className={`${styles} rounded-e-2xl relative rounded-s grid place-content-center`}
    >
      <img src="/images/Atomic-Habits.webp" className="opacity-0" alt="" />
      <div className="flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full flex-col items-center gap-4">
        <div className="size-12 text-(--prim)">
          <CirkelArrowIcon />
        </div>
        <div className="text-black/69 font-[dana-db] lg:text-base text-sm">مشاهده بیشتر</div>
      </div>
    </Link>
  );
}

export default SeeMore;
