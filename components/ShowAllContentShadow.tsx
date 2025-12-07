"use client";

import { ReactNode, useState } from "react";

interface I_Props {
  children: ReactNode;
  initialHeight?: number;
  shadowStyles?: string;
}

function ShowAllContentShadow({ children, initialHeight = 12, shadowStyles }: I_Props) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <div
        style={{ height: isShow ? "auto" : `${initialHeight}rem` }}
        className={`${
          isShow
            ? ""
            : `${shadowStyles} after:absolute after:bottom-0 after:left-0 after:w-full after:h-[calc(100%-5rem)] after:bg-linear-to-t after:from-white/95`
        } overflow-hidden relative`}
      >
        {children}
      </div>
      <div
        onClick={() => setIsShow(!isShow)}
        className="lg:mt-4 mt-2 cursor-pointer"
      >
        {isShow ? (
          <div className="flex justify-center items-center">
            <div className="text-(--prim) lg:text-sm text-[13px]">
              بستن
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <div className="text-(--prim) lg:text-sm text-[13px]">
              مشاهده بیشتر ...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowAllContentShadow;
