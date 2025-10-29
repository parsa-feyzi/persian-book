import Button from "./designSystem/Button";
import ArrowIcon from "./icons/ArrowIcon";
import Link from "next/link";

interface I_Props { title: string, image: string, discount: string, shortDiscription: string, href: string, color: string }

function LandingItem({ title, image, discount, shortDiscription, href, color }: I_Props) {
  return (
    <div className="relative h-[calc(100vh-5rem)] flex items-center px-32 justify-between">
      <div className={`absolute top-22 right-32 size-14 rounded-full bg-${color}/5 grid place-content-center pt-1 font-[dana-b] text-2xl`}>
        {discount}
        <span className={`absolute top-3 left-1/2 -translate-x-1/2 text-5xl -z-1 text-${color}/30`}>
          %
        </span>
      </div>
      <div className={`absolute top-21 right-31 size-16 rounded-full bg-${color}/10 grid place-content-center pt-1 font-[dana-b] text-2xl`}></div>
      <div className={`absolute top-20 right-30 size-18 rounded-full bg-${color}/5 grid place-content-center pt-1 font-[dana-b] text-2xl`}></div>
      <div>
        <div>
          <div className="text-5xl">
            کتاب{" "}
            {
              <span className={`font-[dana-xb] text-6xl text-${color}`}>
                {title}
              </span>
            }{" "}
            منتشر شد
          </div>
          <div className="text-lg mt-2">
            {shortDiscription}
          </div>
        </div>
        <Button className={`translate-y-12 bg-${color}! hover:bg-${color}/90!`}>
          <Link
            href={href}
            className="flex items-center gap-2 py-3 px-4 rounded-full text-white"
          >
            <div>اطلاعات بیشتر</div>
            <div className="size-6">
              <ArrowIcon />
            </div>
          </Link>
        </Button>
      </div>
      <div className="relative">
        <img
          className="h-90 min-w-62 shadow-xl object-cover rounded-lg"
          src={`/images/${image}`}
        />
        <div className={`absolute border-8 border-${color} size-34 rounded-full top-1/2 -translate-y-1/2 -right-5 -z-1`}></div>
        <div className={`absolute border-8 border-${color}/90 size-44 rounded-full top-1/2 -translate-y-1/2 -right-10 -z-1`}></div>
        <div className={`absolute border-8 border-${color}/80 size-54 rounded-full top-1/2 -translate-y-1/2 -right-15 -z-1`}></div>
      </div>
    </div>
  );
}

export default LandingItem;
