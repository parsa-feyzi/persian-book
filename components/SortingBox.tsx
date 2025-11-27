"use client";

import { I_SortingTab } from "@/types/types";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import { Dispatch, SetStateAction } from "react";
import ArrowDownIcon from "./icons/ArrowDownIcon";

interface I_Props {
  tabs: I_SortingTab[];
  itemsNumber: number;
  label: string;
  seeOtherHandler?: Dispatch<SetStateAction<boolean>>;
}

function SortingBox({ tabs, itemsNumber, label, seeOtherHandler }: I_Props) {
  return (
    <div className="flex items-center justify-between md:pb-4 pb-2 border-b border-(--seco)/10 shadow-2xl/2">
      <div className="md:flex hidden items-center gap-4">
        <div className="flex items-center gap-1 text-black/70">
          <div>
            <SwapVertRoundedIcon />
          </div>
          <div>مرتب سازی:</div>
        </div>
        <div className="flex gap-4 items-center text-sm">
          {tabs.map((tab) => (
            <div
              key={tab.href}
              className={`${
                tab.isActive ? "text-(--prim)" : "text-(--seco)/70"
              } cursor-pointer active:scale-95`}
            >
              {tab.title}
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden block active:scale-95 cursor-pointer">
        <div className="flex items-center gap-1 text-black/70">
          <div>
            <SwapVertRoundedIcon sx={{ fontSize: 20 }} />
          </div>
          <div className="text-sm">
            {tabs[tabs.findIndex((item) => item.isActive)].title}
          </div>
        </div>
      </div>
      {seeOtherHandler ? (
        <>
          <div className="lg:block hidden text-(--seco)/70 font-[dana-db] text-sm">
            <span className="price pe-1 text-(--seco)/70!">{itemsNumber}</span>
            {label}
          </div>
          <div onClick={() => seeOtherHandler(true)} className="flex gap-1 lg:hidden items-center text-black/70! text-xs">
            <div className="mt-0.5">
              مشاهده{" "}
              <span className="price pe-1 text-black/70!">{itemsNumber}</span>
              {label}
            </div>
            <div className="size-3 rotate-90">
              <ArrowDownIcon />
            </div>
          </div>
        </>
      ) : (
        <div className="text-(--seco)/70 font-[dana-db] lg:text-sm text-xs">
          <span className="price pe-1 text-(--seco)/70!">{itemsNumber}</span>
          {label}
        </div>
      )}
    </div>
  );
}

export default SortingBox;
