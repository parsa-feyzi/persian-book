import Button from "./designSystem/Button";
import DiscountBox from "./DiscountBox";
import ArrowIcon from "./icons/ArrowIcon";
import Link from "next/link";

interface I_Props {
  title: string;
  image: string;
  discount: number;
  shortDiscription: string;
  href: string;
  color: string;
}

function LandingItem({ title, image, discount, shortDiscription, href, color }: I_Props) {
  return (
    <div className="relative lg:h-[calc(100vh-8rem)] md:h-[calc(100vh-12rem)]   flex md:flex-row flex-col-reverse items-center xl:px-32 lg:px-28 md:px-18 px-10 md:justify-between justify-end md:mt-0 mt-2">
      <DiscountBox color={color} discount={discount} styles="md:top-8 top-2 md:right-auto right-[75vw]" />
      <div className="md:mt-0 mt-6">
        <div>
          <div className="lg:text-4xl text-2xl  xl:leading-16 lg:leading-14 md:leading-10 md:text-right text-center">
            کتاب{" "}
            {
              <span style={{ color }} className="font-[dana-xb] xl:text-6xl lg:text-5xl md:text-3xl">
                {title}
              </span>
            }{" "}
            منتشر شد
          </div>
          <div className="lg:text-lg md:text-base text-sm md:mt-2 mt-1 md:text-right text-center">{shortDiscription}</div>
        </div>
        <Button
          style={{
            backgroundColor: `color-mix(in oklab, ${color} 100%, transparent)`,
          }}
          className="md:translate-y-12 md:mt-0 mt-5 md:mx-0 mx-auto md:rounded-full rounded-lg md:duration-200 md:hover:-translate-x-2"
        >
          <Link
            href={href}
            className="flex items-center md:gap-2 gap-1 md:py-3 py-2 px-4 text-white"
          >
            <div className="md:text-base text-sm">اطلاعات بیشتر</div>
            <div className="md:size-6 size-5">
              <ArrowIcon />
            </div>
          </Link>
        </Button>
      </div>
      <Link href={href} className="relative block lg:ms-24 md:ms-18 md:mt-0 mt-14">
        <img
          className="lg:h-80 lg:min-w-58 md:h-72 md:min-w-50 h-56 shadow-xl shadow-black/5 object-cover rounded-lg"
          src={`/images/${image}`}
        />
        <div
          style={{
            borderColor: `color-mix(in oklab, ${color} 40%, transparent)`,
          }}
          className={`absolute border-8 size-34 rounded-full md:top-1/2 md:-translate-y-1/2 -top-3 md:-right-5 md:translate-x-0 right-1/2 translate-x-1/2 -z-1`}
        ></div>
        <div
          style={{
            borderColor: `color-mix(in oklab, ${color} 30%, transparent)`,
          }}
          className={`absolute border-8 size-44 rounded-full md:top-1/2 md:-translate-y-1/2 -top-8 md:-right-10 md:translate-x-0 right-1/2 translate-x-1/2 -z-1`}
        ></div>
        <div
          style={{
            borderColor: `color-mix(in oklab, ${color} 20%, transparent)`,
          }}
          className={`absolute border-8 size-54 rounded-full md:top-1/2 md:-translate-y-1/2 -top-13 md:-right-15 md:translate-x-0 right-1/2 translate-x-1/2 -z-1`}
        ></div>
      </Link>
    </div>
  );
}

export default LandingItem;
