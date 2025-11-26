import Link from "next/link";

interface I_Props {
  index: number;
  image: string;
  href: string;
  discount: number;
}

function SecoProductBox({ index, image, href, discount }: I_Props) {
  return (
    <Link
      href={href}
      className={`${
        index === 0
          ? "rounded-r-[18px]"
          : ""
      }  SecoProductBox w-fit relative block rounded-lg overflow-hidden`}
    >
      <img
        className={`${
          index === 0
            ? "rounded-r-2xl"
            : ""
        } SecoProductBox-image rounded-md m-auto max-h-64 w-full! object-cover `}
        src={`/images/${image}`}
        alt=""
      />
      <div className="SecoProductBox-showAndBuy absolute bg-linear-to-t rounded-b-lg from-black/70 w-full z-10 h-1/3 shadow-2xl flex items-end justify-center text-white pb-2">
        <span className="sm:text-base text-[13px]">مشاهده و خرید</span>
      </div>
      {discount !== 0 && (
        <div className="font-[iransans] absolute top-2 left-2 sm:text-sm text-xs bg-(--prim)/85 rounded-full text-white px-2 pt-0.5 sm:pb-0 pb-0.5">
          {discount}%
        </div>
      )}
    </Link>
  );
}

export default SecoProductBox;
