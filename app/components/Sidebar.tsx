import { Dispatch, SetStateAction } from "react";
import SearchIcon from "./icons/SearchIcon";
import MoonIcon from "./icons/MoonIcon";
import Button from "./designSystem/Button";
import Link from "next/link";
import ArrowDownIcon from "./icons/ArrowDownIcon";

interface I_Props {
  isSidebarShow: boolean;
  setIsSidebarShow: Dispatch<SetStateAction<boolean>>;
}

function Sidebar({ isSidebarShow, setIsSidebarShow }: I_Props) {
  return (
    <>
      <div
        className={`${
          isSidebarShow ? "translate-x-0" : "translate-x-64"
        } transition-all duration-500 h-screen md:hidden block w-64 fixed z-20 bg-[#f5fdfa] top-0 right-0`}
      >
        <div className="w-full flex items-center p-3 py-5 bg-(--seco)/3">
          <input
            type="text"
            placeholder="جستجو بین کتاب‌ها ..."
            className="w-[calc(100%-1.5rem)] placeholder:text-(--seco)/70 border-none outline-none px-2 text-sm"
          />
          <div className="size-[17px] mb-0.5 text-emerald-800">
            <SearchIcon />
          </div>
        </div>
        <div className="py-3">
          <Link href="/" className="block py-3 px-6">صفحه اصلی</Link>
          <Link href="/stor" className="block py-3 px-6 bg-linear-to-l from-(--seco)/3 to-(--seco)/1 text-(--prim)">فروشگاه</Link>
          <Link href="/weblog" className="block py-3 px-6">وبلاگ</Link>
          <div className="py-3 px-6 flex justify-between items-center">
            <div>ارطبات با ما</div>
            <div className="size-4 text-black/80">
              <ArrowDownIcon />
            </div>
          </div>
          <div className="flex px-6 pt-5 gap-2.5 items-center">
            <div className="size-4">
              <MoonIcon />
            </div>
            <div>تم تیره</div>
          </div>
        </div>
        <Button className="py-5 rounded-none w-full text-(--prim) absolute bottom-0 ">
          <span className="px-3">ورود | ثبت‌نام</span>
        </Button>
      </div>
      <div
        onClick={() => setIsSidebarShow(false)}
        className={`${
          isSidebarShow ? "block bg-black/40" : "hidden"
        } h-screen md:hidden block w-screen fixed z-10 top-0 right-0`}
      ></div>
    </>
  );
}

export default Sidebar;
