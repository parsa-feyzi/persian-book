import { ReactNode } from "react";

import { T_Size } from "@/types/types";


interface I_Props {
  title: string;
  value: ReactNode;
  size?: T_Size;
  isPrice?: boolean;
  isDiscount?: boolean;
}

function PriceBox({ title, value, size = "md", isPrice, isDiscount }: I_Props) {
  return (
    <div
      className={`${
        size === "md" ? "mt-4" : size === "sm" ? "mt-2" : ""
      } flex justify-between items-end`}
    >
      <div
        className={`
        ${isDiscount ? "text-red-700!" : ""}    
        ${
          size === "lg"
            ? "xl:text-lg text-[17px]"
            : size === "md"
            ? "xl:text-base text-[15px]"
            : size === "sm"
            ? "xl:text-sm text-[13px]"
            : ""
        } text-(--seco)`}
      >
        {title}:
      </div>
      <div
        className={`
            ${isDiscount ? "text-red-700!" : ""}
        ${
          size === "lg"
            ? "text-2xl"
            : size === "md"
            ? "text-xl"
            : size === "sm"
            ? "text-[17px]"
            : ""
        } flex items-end price`}
      >
        {isDiscount && (
          <span className="font-[dana-l] text-[16px] ps-0.5">%</span>
        )}
        {value}
        {isPrice && (
          <span
            className={`${
              size === "lg"
                ? "text-xs"
                : size === "md"
                ? "text-[11px]"
                : size === "sm"
                ? "text-[10px]"
                : ""
            } font-[dana-l] ps-0.5 text-(--seco) flex flex-col items-end justify-top font-medium sm:-translate-y-0.5 -translate-y-1`}
          >
              <div className="translate-y-1.5 translate-x-px">ن</div>
              <div>توما</div>
          </span>
        )}
      </div>
    </div>
  );
}

export default PriceBox;
