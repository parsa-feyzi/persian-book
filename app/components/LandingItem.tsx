import Button from "./designSystem/Button";
import ArrowIcon from "./icons/ArrowIcon";
import Link from "next/link";

interface I_Props {
  title: string;
  image: string;
  discount: string;
  shortDiscription: string;
  href: string;
  color: string;
}

function LandingItem({ title, image, discount, shortDiscription, href, color }: I_Props) {
  return (
    <div className="relative md:h-[calc(100vh-8rem)]  flex md:flex-row flex-col-reverse items-center xl:px-32 lg:px-28 md:px-18 px-10 md:justify-between justify-end md:mt-0 mt-2">
      {/* start off box */}
      <div>
        <div
          style={{
            backgroundColor: `color-mix(in oklab, ${color} 6%, transparent)`,
          }}
          className={`grid absolute md:top-12 top-2 text-black/85 lg:right-32 md:right-22 md:left-auto left-8 md:size-12 size-8 rounded-full place-content-center pt-1.5 font-[dana-b] md:text-2xl text-lg`}
        >
          {discount}
          <span
            style={{ color, opacity: 0.3 }}
            className="absolute md:top-[7px] top-1 left-1/2 -translate-x-1/2 md:text-[2.5rem] text-3xl -z-1"
          >
            %
          </span>
        </div>
        <div
          style={{ backgroundColor: color, opacity: 0.08 }}
          className={`absolute md:top-11 top-1 lg:right-31 md:right-21 md:left-auto left-7 md:size-14 size-10 rounded-full grid place-content-center pt-1 font-[dana-b]`}
        ></div>
        <div
          style={{ backgroundColor: color, opacity: 0.03 }}
          className={`absolute md:top-10 top-0 lg:right-30 md:right-20 md:left-auto left-6 md:size-16 size-12 rounded-full grid place-content-center pt-1 font-[dana-b]`}
        ></div>
        <div style={{ color }} className="absolute md:top-20 top-8 lg:right-33 md:right-23 md:left-auto left-7.5 md:text-sm text-xs font-[dana-db]">تخفیف</div>
      </div>
      {/* end off box */}
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
          className="lg:h-90 lg:min-w-62 md:h-72 md:min-w-50 h-56 shadow-xl shadow-black/5 object-cover rounded-lg"
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
