import Link from "next/link";
import CirkelArrowIcon from "./icons/CirkelArrowIcon";

interface I_Props { href: string, styles: string }

function SeeMore({ href, styles }: I_Props) {
  return (
    <Link
      href={href}
      className={`${styles} rounded-e-2xl rounded-s grid place-content-center`}
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
