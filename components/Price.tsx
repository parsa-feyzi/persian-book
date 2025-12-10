import { T_Size } from "@/types/types";
import { Activity } from "react";

interface I_Props {
  price: number;
  styles?: string;
  size?: T_Size;
  discount?: number;
}

function Price({ price, styles, size="lg", discount=0 }: I_Props) {
  return (
    <div
      className={`${styles} ${
        size == "lg"
          ? "sm:text-2xl text-xl"
          : size == "md"
          ? "sm:text-xl text-lg"
          : size == "sm" && "sm:text-lg"
      } price relative flex items-top`}
    >
      <Activity mode={discount <= 100 && discount > 0 ? "visible" : "hidden"}>
        <div
          className={`${
            size == "lg"
              ? "sm:text-lg"
              : size == "md"
              ? "sm:text-base text-sm"
              : size == "sm" && "sm:text-sm text-xs"
          } absolute -top-4 right-0 line-through text-black/30`}
        >
          {price.toLocaleString()}
        </div>
      </Activity>
      {(price - (discount / 100 * price)).toLocaleString()}
      <span className="flex flex-col items-end justify-top sm:text-xs text-[11px]! font-[dana-l] font-medium ps-0.5 text-black/90 sm:-translate-y-0.5 -translate-y-1">
        <div className="translate-y-1.5 translate-x-px">ن</div>
        <div>توما</div>
      </span>
    </div>
  );
}

export default Price;
