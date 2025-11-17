import { ReactNode } from "react";
import { T_Size } from "@/public/types/types";

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
            ? "text-lg"
            : size === "md"
            ? "text-base"
            : size === "sm"
            ? "text-sm"
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
        } price`}
      >
        {isDiscount && <span className="font-[dana-l] text-[15px] ps-0.5">%</span>}
        {value}
        {isPrice && (
          <span
            className={`${
              size === "lg"
                ? "text-sm"
                : size === "md"
                ? "text-xs"
                : size === "sm"
                ? "text-[10px]"
                : ""
            } font-[dana-l] font-light ps-0.5 text-(--seco)`}
          >
            تومان
          </span>
        )}
      </div>
    </div>
  );
}

export default PriceBox;
