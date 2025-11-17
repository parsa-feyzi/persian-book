import { T_Size } from "@/public/types/types";
import { CSSProperties } from "react";

interface I_Props {
  color: string;
  discount: number;
  styles: string;
  size?: T_Size;
}

function DiscountBox({ color, discount, styles, size = "md" }: I_Props) {
  return (
    <div
      className={`${
        size === "sm"
          ? "md:size-12 size-10"
          : size === "md"
          ? "md:size-14 size-12"
          : size === "lg"
          ? "md:size-16 size-14"
          : ""
      } grid absolute place-content-center ${styles}`}
    >
      <div
        style={{
          backgroundColor: `color-mix(in oklab, ${color} 6%, transparent)`,
        }}
        className={`${
          size === "sm"
            ? "md:size-8 size-6 md:text-xl pt-1"
            : size === "md"
            ? "md:size-10 size-8 md:text-2xl text-lg pt-1.5"
            : size === "lg"
            ? "md:size-16 size-14 md:text-5xl text-xl pt-4"
            : ""
        } grid absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-black/85 rounded-full place-content-center font-[dana-b]`}
      >
        {discount}
        <span
          style={{ color, opacity: 0.3 }}
          className={`${
            size === "sm"
              ? "md:text-3xl text-2xl top-px"
              : size === "md"
              ? "md:text-4xl text-3xl top-1.5"
              : size === "lg"
              ? "md:text-[64px] text-5xl top-3"
              : ""
          } absolute left-1/2 -translate-x-1/2 -z-1`}
        >
          %
        </span>
      </div>
      <div
        style={{ backgroundColor: color, opacity: 0.08 }}
        className={`${
          size === "sm"
            ? "md:size-10 size-8"
            : size === "md"
            ? "md:size-12 size-10"
            : size === "lg"
            ? "md:size-18 size-16"
            : ""
        } absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full grid place-content-center pt-1 font-[dana-b]`}
      ></div>
      <div
        style={{ backgroundColor: color, opacity: 0.03 }}
        className={`${
          size === "sm"
            ? "md:size-12 size-10"
            : size === "md"
            ? "md:size-14 size-12"
            : size === "lg"
            ? "md:size-20 size-18"
            : ""
        } absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:size-14 size-12 rounded-full grid place-content-center pt-1 font-[dana-b]`}
      ></div>
      <div
        style={{ color }}
        className={`${
          size === "sm"
            ? "md:text-[11px] text-[9px] bottom-0"
            : size === "md"
            ? "md:text-[13px] text-[11px] bottom-0"
            : size === "lg"
            ? "md:text-lg text-md -bottom-3"
            : ""
        } absolute left-1/2 -translate-x-1/2 font-[dana-db]`}
      >
        تخفیف
      </div>
    </div>
  );
}

export default DiscountBox;
