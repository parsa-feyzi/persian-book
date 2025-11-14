"use client";

import { useState } from "react";
import Button from "./designSystem/Button";
import SearchIcon from "./icons/SearchIcon";

function NavSearchBox() {
  const [searchVal, setSearchVal] = useState("");
  return (
    <>
      <div className="w-70 lg:flex hidden items-center p-1.5 rounded-full bg-(--seco)/3 backdrop-blur-xl h-10">
        <input
          type="text"
          placeholder="جستجو بین کتاب‌ها، نویسندگان، ژانرها..."
          className="w-[calc(100%-1.5rem)] placeholder:text-xs placeholder:text-(--seco)/70 border-none outline-none px-2 text-sm"
        />
        <div className="size-4">
          <SearchIcon />
        </div>
      </div>
      <Button className="lg:hidden md:grid hidden size-10">
        <div className="size-4">
          <SearchIcon />
        </div>
      </Button>
    </>
  );
}

export default NavSearchBox;
