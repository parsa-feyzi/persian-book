"use client";
import { ReactNode, useState } from "react";

function ShowAllText({ children }: { children: ReactNode }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <div className={`${isShow ? "" : "line-clamp-3"}`}>{children}</div>
      <div className="text-(--prim) text-sm cursor-pointer mt-2" onClick={() => setIsShow(!isShow)}>{isShow ? "مشاهده کمتر" : "مشاهده بیشتر"}</div>
    </div>
  );
}

export default ShowAllText;
