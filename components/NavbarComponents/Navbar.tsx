import Image from "next/image";
import Link from "next/link";

import CartIcon from "../icons/CartIcon";
import SunIcon from "../icons/SunIcon";
import Button from "../designSystem/Button";
import Container from "../Container";
import NavSearchBox from "./NavSearchBox";
import NavHamberMenu from "./NavHamberMenu";
import NavCart from "./NavCart";


function Navbar() {
  return (
    <nav className="fixed pry_border w-full md:py-5 py-3 bg-(--base)/30 backdrop-blur-xl z-2">
      <Container>
        <div className="flex items-center justify-between">
          <NavHamberMenu />
          <div className="flex items-center lg:gap-10 gap-8">
            <Link href={"/"} className="relative lg:size-9 size-8">
              <Image fill src="/images/logo.png" alt={""} />
            </Link>
            <div className="md:flex hidden text-lg item-center lg:gap-6 gap-4">
              <Link
                href={"/"}
                className="hover:text-(--prim) lg:text-[15px] text-sm font-[dana-db]"
              >
                صفحه اصلی
              </Link>
              <Link
                href={"/store"}
                className="hover:text-(--prim) lg:text-[15px] text-sm font-[dana-db]"
              >
                فروشگاه
              </Link>
              <Link
                href={"/blog"}
                className="hover:text-(--prim) lg:text-[15px] text-sm font-[dana-db]"
              >
                وبلاگ
              </Link>
              <Link
                href={"/contact-us"}
                className="hover:text-(--prim) lg:text-[15px] text-sm font-[dana-db]"
              >
                ارتباط با ما
              </Link>
            </div>
          </div>
          <div className="flex flex-row-reverse lg:gap-4 gap-3 items-center">
            <Button className="pry_border md:grid bg-(--seco)/2 backdrop-blur-xl hidden h-11 text-(--prim)">
              <span className="px-3 text-sm">ورود | ثبت‌نام</span>
            </Button>
            <NavCart />
            <Button className="pry_border md:grid bg-(--seco)/2 backdrop-blur-xl hidden size-11">
              <div className="size-5">
                <SunIcon />
              </div>
            </Button>
            <NavSearchBox />
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
