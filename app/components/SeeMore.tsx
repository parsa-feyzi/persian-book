import Link from "next/link";
import CirkelArrowIcon from "./icons/CirkelArrowIcon";

function SeeMore({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="h-[340px] rounded-e-2xl rounded-s bg-white grid place-content-center"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="size-14 text-(--prim)/69">
          <CirkelArrowIcon />
        </div>
        <div className="text-(--seco) font-[dana-b]">مشاهده بیشتر</div>
      </div>
    </Link>
  );
}

export default SeeMore;
