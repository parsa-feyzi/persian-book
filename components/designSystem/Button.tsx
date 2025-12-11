import { T_Size } from "@/types/types";
import { ComponentProps } from "react";

type T_Button = {
  btnType?: "normal" | "rounded" | "primary" | "outLine";
  size?: T_Size;
} & ComponentProps<"button">;

function Button({ children, btnType = "normal", size = "md", style, onClick, className }: T_Button) {
  return (
    <button
      onClick={onClick}
      className={`${className} 
      ${
        btnType === "normal" ? "rounded-full" :
        btnType === "rounded"
          ? "px-5 py-3 rounded-full bg-(--prim) text-white"
          : btnType === "primary"
          ? "rounded-lg p-3 bg-(--prim) text-white"
          : btnType === "outLine"
          ? "duration-150 border-2 border-(--prim) bg-(--prim)/0 text-(--prim) hover:bg-(--prim) hover:text-white rounded-lg font-[dana-db] sm:px-4 px-3 sm:py-2 py-1.5"
          : ""
      }
      ${
        size === "lg"
          ? "xl:text-base text-[15px]"
          : size === "md"
          ? "xl:text-sm text-[13px]"
          : size === "sm"
          ? "xl:text-xs text-[11px]"
          : ""
      }
       overflow-hidden flex gap-1 justify-center items-center cursor-pointer active:scale-[0.98]`}
       style={style}
    >
      {children}
    </button>
  );
}

export default Button;
