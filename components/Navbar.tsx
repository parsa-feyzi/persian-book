import Container from "./Container";
import Link from "next/link";
import CartIcon from "./icons/CartIcon";
import Button from "./designSystem/Button";
import SunIcon from "./icons/SunIcon";
import NavSearchBox from "./NavSearchBox";
import NavHamberMenu from "./NavHamberMenu";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="fixed w-full md:py-5 py-3 bg-(--base)/30 backdrop-blur-2xl z-1!">
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
                href={"/stor"}
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
            <Button className="md:grid backdrop-blur-xl hidden h-10 text-(--prim)">
              <span className="px-3 text-sm">ورود | ثبت‌نام</span>
            </Button>
            <Button className="size-10 backdrop-blur-xl">
              <div className="size-5">
                <CartIcon />
              </div>
            </Button>
            <Button className="md:grid backdrop-blur-xl hidden size-10">
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
