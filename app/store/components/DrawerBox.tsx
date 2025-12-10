"use client";
import { Activity, ReactNode, useState } from "react";

import { KeyboardArrowDownRounded } from "@mui/icons-material";

interface Props {
  title: string;
  children: ReactNode;
  isLatestItem?: boolean
}

function DrawerBox({ title, children, isLatestItem }: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className={`${isLatestItem ? "" : "border-b border-black/5"} pb-4`}>
      <div onClick={() => setIsDrawerOpen(!isDrawerOpen)} className="flex pt-4 items-center justify-between cursor-pointer">
        <div className="text-[15px]">{title}</div>
        <div className={`${ isDrawerOpen ? "rotate-180" : "rotate-0" } duration-200 text-black/40`}>
          <KeyboardArrowDownRounded />
        </div>
      </div>
      <Activity mode={isDrawerOpen ? "visible" : "hidden"}>
        <div className="pt-4">{children}</div>
      </Activity>
    </div>
  );
}

export default DrawerBox;
