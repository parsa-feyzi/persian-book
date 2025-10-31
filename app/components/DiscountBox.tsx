import { CSSProperties } from "react";

interface I_Props {
  color: string;
  discount: number;
  styles: string;
}

function DiscountBox({ color, discount, styles }: I_Props) {
  return (
    <div className={`grid md:size-14 absolute size-12 place-content-center ${styles}`}>
      <div
        style={{ backgroundColor: `color-mix(in oklab, ${color} 6%, transparent)` }}
        className={`grid absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-black/85 md:size-10 size-8 rounded-full place-content-center pt-1.5 font-[dana-b] md:text-2xl text-lg`}
      >
        {discount}
        <span
          style={{ color, opacity: 0.3 }}
          className="md:text-[2.3rem] absolute top-1 left-1/2 -translate-x-1/2 text-3xl -z-1"
        >
          %
        </span>
      </div>
      <div
        style={{ backgroundColor: color, opacity: 0.08 }}
        className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:size-12 size-10 rounded-full grid place-content-center pt-1 font-[dana-b]`}
      ></div>
      <div
        style={{ backgroundColor: color, opacity: 0.03 }}
        className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:size-14 size-12 rounded-full grid place-content-center pt-1 font-[dana-b]`}
      ></div>
      <div
        style={{ color }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[13px] text-[11px] font-[dana-db]"
      >
        تخفیف
      </div>
    </div>
  );
}

export default DiscountBox;
