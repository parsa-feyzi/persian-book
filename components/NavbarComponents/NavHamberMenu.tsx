"use client";
import { Activity, useState } from "react";

import Button from "../designSystem/Button";
import MenuIcon from "../icons/MenuIcon";
import Sidebar from "../Sidebar";
import Cover from "../Cover";

function NavHamberMenu() {
  const [isSidebarShow, setIsSidebarShow] = useState(false);

  return (
    <div className="md:hidden block">
      <Button
        onClick={() => setIsSidebarShow(true)}
        className="md:hidden! bg-(--seco)/3 grid! size-10 pry_border"
      >
        <div className="size-5">
          <MenuIcon />
        </div>
      </Button>
      <Activity mode={isSidebarShow ? "visible" : "hidden"}>
        <Sidebar />
        <Cover setIsModalOpen={setIsSidebarShow} z={10} />
      </Activity>
    </div>
  );
}

export default NavHamberMenu;
