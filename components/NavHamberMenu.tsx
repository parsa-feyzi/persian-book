"use client";

import { useState } from "react";
import Button from "./designSystem/Button";
import MenuIcon from "./icons/MenuIcon";
import Sidebar from "./Sidebar";

function NavHamberMenu() {
  const [isSidebarShow, setIsSidebarShow] = useState(false);

  return (
    <div className="md:hidden block">
      <Button
        onClick={() => setIsSidebarShow(true)}
        className="md:hidden! grid! size-10"
      >
        <div className="size-5">
          <MenuIcon />
        </div>
      </Button>
      <Sidebar isSidebarShow={isSidebarShow} setIsSidebarShow={setIsSidebarShow} />
    </div>
  );
}

export default NavHamberMenu;
