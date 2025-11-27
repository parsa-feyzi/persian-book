"use client";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Dispatch, ReactNode, SetStateAction } from "react";

interface I_Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  icon?: ReactNode;
}

function Closer({ setIsOpen, icon = <CloseRoundedIcon /> }: I_Props) {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className="pt-1 active:scale-90 text-black/70!"
    >
      {icon}
    </div>
  );
}

export default Closer;
