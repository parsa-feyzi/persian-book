import Container from "./Container";
import Link from "next/link";
import CartIcon from "./icons/CartIcon";
import Button from "./designSystem/Button";
import SunIcon from "./icons/SunIcon";
import NavSearchBox from "./NavSearchBox";
import NavHamberMenu from "./NavHamberMenu";

function Navbar() {
  return (
    <nav className="fixed w-full md:py-5 py-3 bg-(--nut-prim)/40 backdrop-blur-lg z-1!">
      <Container>
        <div className="flex items-center justify-between">
          <NavHamberMenu />
          <div className="flex items-center lg:gap-10 gap-8">
            <Link href={"/"}>
              <img className="lg:size-9 size-8" src="/images/logo.png"></img>
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
            <Button className="md:grid hidden h-10 text-(--prim)">
              <span className="px-3 text-sm">ورود | ثبت‌نام</span>
            </Button>
            <Button className="size-10">
              <div className="size-5">
                <CartIcon />
              </div>
            </Button>
            <Button className="md:grid hidden size-10">
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
