"use client";
import { ReactNode, useState } from "react";

interface I_Props {
  children: string;
  openStateButton: ReactNode;
  closeStateButton: ReactNode;
}

function ShowAllText({ children, openStateButton, closeStateButton }: I_Props) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <div className={`${ isShow ? "" : children.length >= 480 ? "line-clamp-3" : "" }`}>
        {children}
      </div>
      {children.length >= 480 && (
        <div onClick={() => setIsShow(!isShow)} className="lg:mt-2 mt-0">
          {isShow ? openStateButton : closeStateButton}
        </div>
      )}
    </div>
  );
}

export default ShowAllText;
