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
    <div className="relative h-[calc(100vh-5rem)] flex md:flex-row flex-col-reverse items-center xl:px-32 lg:px-28 md:px-18 px-10 md:justify-between justify-end">
      <div
        style={{
          backgroundColor: `color-mix(in oklab, ${color} 6%, transparent)`,
        }}
        className={`md:grid hidden absolute top-22 text-black/85 lg:right-32 right-22 size-12 rounded-full place-content-center pt-1.5 font-[dana-b] text-2xl`}
      >
        {discount}
        <span
          style={{ color, opacity: 0.3 }}
          className="absolute top-1 left-1/2 -translate-x-1/2 text-[2.5rem] -z-1"
        >
          %
        </span>
      </div>
      <div
        style={{ backgroundColor: color, opacity: 0.08 }}
        className={`absolute top-21 lg:right-31 right-21 size-14 rounded-full md:grid hidden place-content-center pt-1 font-[dana-b] text-2xl`}
      ></div>
      <div
        style={{ backgroundColor: color, opacity: 0.03 }}
        className={`absolute top-20 lg:right-30 right-20 size-16 rounded-full md:grid hidden place-content-center pt-1 font-[dana-b] text-2xl`}
      ></div>
      <div className="md:mt-0 mt-6">
        <div>
          <div className="lg:text-4xl md:text-2xl text-2xl xl:leading-16 lg:leading-14 md:leading-10 md:text-right text-center">
            کتاب{" "}
            {
              <span style={{ color }} className="font-[dana-xb] xl:text-6xl lg:text-5xl md:text-3xl">
                {title}
              </span>
            }{" "}
            منتشر شد
          </div>
          <div className="lg:text-lg mt-2 md:text-right text-center">{shortDiscription}</div>
        </div>
        <Button
          style={{
            backgroundColor: `color-mix(in oklab, ${color} 100%, transparent)`,
          }}
          className="md:translate-y-12 md:mt-0 mt-5 md:mx-0 mx-auto md:rounded-full rounded-lg"
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
          className="lg:h-90 lg:min-w-62 md:h-72 md:min-w-50 h-56 shadow-xl object-cover rounded-lg"
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
