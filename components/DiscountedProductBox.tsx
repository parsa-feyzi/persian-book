import Link from "next/link";

interface I_Props {
  index: number;
  listLenght: number;
  image: string;
  href: string;
  discount: number
}

function DiscountedProductBox({ index, listLenght, image, href, discount }: I_Props) {
  return (
    <Link
      href={href}
      className={`${
        index === 0
          ? "rounded-r-2xl"
          : index === listLenght - 1
          ? "rounded-l-2xl"
          : ""
      }  discountedProductBox w-fit bg-black relative block rounded-md overflow-hidden`}
    >
      <img
        className="discountedProductBox-image max-h-64 w-full m-auto object-cover"
        src={`/images/${image}`}
        alt=""
      />
      <div className="discountedProductBox-showAndBuy absolute bg-linear-to-t from-black/70 w-full z-10 h-1/3 shadow-2xl flex items-end justify-center text-white pb-2">
        <span>مشاهده و خرید</span>
      </div>
      <div className="font-[iransans] absolute top-2 left-2 text-sm bg-(--prim)/85 rounded-full text-white px-2 pt-0.5">{discount}%</div>
    </Link>
  );
}

export default DiscountedProductBox;
