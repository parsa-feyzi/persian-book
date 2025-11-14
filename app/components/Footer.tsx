import Link from "next/link";
import Container from "./Container";
import MediaButton from "./MediaButton";
import InstagramIcon from "./icons/InstagramIcon";
import TelegramIcon from "./icons/TelegramIcon";
import WhatsappIcon from "./icons/WhatsappIcon";
import InfoBox from "./InfoBox";
import FooterList from "./FooterList";
import GeoIcon from "./icons/GeoIcon";

// <footer className="pt-16 pb-8 bg-(--prim)/4 mt-24">
//   <Container>
//
//   </Container>
// </footer>

function Footer() {
  return (
    <footer className="mt-25 relative overflow-hidden sm:mt-32 bg-white pt-8 md:pt-16 pb-4">
      <div className="absolute z-0 md:opacity-85 opacity-50 -top-24 -right-24">
        <div className="absolute top-8 right-8 size-32 bg-(--prim)/4 rounded-full"></div>
        <div className="absolute top-0 right-0 size-54 bg-(--prim)/3.5 rounded-full"></div>
        <div className="absolute -top-8 -right-8 size-76 bg-(--prim)/3 rounded-full"></div>
        <div className="absolute -top-16 -right-16 size-98 bg-(--prim)/2.5 rounded-full"></div>
        <div className="absolute -top-24 -right-24 size-120 bg-(--prim)/2 rounded-full"></div>
        <div className="absolute -top-32 -right-32 size-142 bg-(--prim)/1.5 rounded-full"></div>
        <div className="absolute -top-40 -right-40 size-164 bg-(--prim)/1 rounded-full"></div>
      </div>
      <div className="absolute z-0 md:opacity-85 opacity-75 -bottom-24 -left-24">
        <div className="absolute bottom-8 left-8 size-32 bg-(--prim)/4 rounded-full"></div>
        <div className="absolute bottom-0 left-0 size-54 bg-(--prim)/3.5 rounded-full"></div>
        <div className="absolute -bottom-8 -left-8 size-76 bg-(--prim)/3 rounded-full"></div>
        <div className="absolute -bottom-16 -left-16 size-98 bg-(--prim)/2.5 rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 size-120 bg-(--prim)/2 rounded-full"></div>
        <div className="absolute -bottom-32 -left-32 size-142 bg-(--prim)/1.5 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 size-164 bg-(--prim)/1 rounded-full"></div>
      </div>
      <Container styles={{ position: "relative" }}>
        <div className="pb-4 mb-4 sm:pb-8 sm:mb-8 border-b-2 border-b-(--seco)/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center sm:gap-1">
              <img
                className="lg:size-14 sm:size-11 size-9 opacity-100"
                src="/images/logo.png"
              />
              <h1 className="lg:text-3xl sm:text-2xl text-xl mt-3">
                <div className="font-[dana-b] sm:leading-4 leading-2">
                  پرشین
                </div>
                <div className="font-[dana-b] text-(--seco)">بـوکـــ</div>
              </h1>
            </Link>
            <div className="flex gap-x-2 sm:gap-x-4">
              <MediaButton
                icon={<InstagramIcon />}
                href="https://instagram.com"
              />
              <MediaButton
                icon={<TelegramIcon />}
                href="https://telegram.com"
              />
              <MediaButton
                icon={<WhatsappIcon />}
                href="https://whatsapp.com"
              />
            </div>
          </div>
          <div className="flex flex-wrap sm:justify-start justify-center md:gap-x-12 gap-x-6 gap-y-6 sm:mt-12 mt-10">
            <div className="sm:block hidden">
              <InfoBox label="آدرس" infos="تهران، میدان انقلاب، خیابان کارگر شمالی، پـ ۴۵، طـ ۲" />
            </div>
            <InfoBox label="ایمیل" infos="persian_book@gmail.com" />
            <InfoBox
              label="تلفن"
              infos={
                <div dir="ltr" className="font-[iransans] font-bold">
                  +901 458 8569
                </div>
              }
            />
          </div>
          <div className="md:text-base text-sm sm:hidden flex gap-1 mt-4">
            <div className="font-[dana-b] leading-4 text-(--seco) size-4">
              <GeoIcon />
            </div>
            <div className="text-(--seco)/85">
              تهران، میدان انقلاب، خیابان کارگر شمالی، پـ ۴۵، طـ ۲
            </div>
          </div>
        </div>
        <div className="flex items-start sm:justify-between justify-center flex-wrap gap-5">
          <div>
            <span className="inline-block sm:text-xl font-[dana-xb] mb-3 sm:mb-4 text-black/85">
              درباره پرشین بوکــ
            </span>
            <div>
              <p className="max-w-100 text-dark text-(--seco) leading-7 sm:text-base text-sm">
                فروشگاه کتاب ما با هدف ترویج کتاب‌خوانی و دسترسی آسان به منابع
                متنوع ایجاد شده است. اینجا می‌توانید تازه‌ترین رمان‌ها، کتاب‌های
                آموزشی و کودکانه را از ناشران معتبر تهیه کنید. ما تجربه خرید
                آسان، قیمت مناسب و ارسال سریع را برای دوست‌داران کتاب فراهم
                کرده‌ایم.
              </p>
            </div>
            <p></p>
          </div>
          <div className="flex items-start gap-x-8 sm:gap-x-12">
            <FooterList
              title="کتاب‌های پیشنهادی"
              listItems={[
                { title: "عادت‌های اتمی", href: "/", id: 0 },
                { title: "کار عمیق", href: "/", id: 1 },
                { title: "سمفونی مردگان", href: "/", id: 2 },
                { title: "تاریخ باستان", href: "/", id: 3 },
              ]}
            />
            <FooterList
              title="دسترسی سریع"
              listItems={[
                { title: "قوانین و مقررات", href: "/", id: 0 },
                { title: "ارسال تیکت", href: "/", id: 1 },
                { title: "همه کتاب‌ها", href: "/", id: 2 },
              ]}
            />
          </div>
          <a href="https://trustseal.enamad.ir/?id=445206code=SgLtG6QTvIyffV2cjuiTe4sSPvMqsNSf">
            <img
              src="images/enamad.webp"
              className="lg:w-52 sm:w-48 w-42 sm:px-0 object-cover"
              alt=""
            />
          </a>
        </div>
        <div className="flex text-(--seco)/80 sm:text-sm text-sm items-center justify-center text-center sm:text-right sm:justify-between flex-wrap gap-y-2 gap-x-4 mt-7 sm:mt-14">
          <span>کلیه حقوق مادی و معنوی سایت برای <span className="text-(--prim) font-[dana-b]">پرشین بوکــ</span> محفوظ است.</span>
          <span>ساخته شده توصت <span className="font-[dana-db]">پارسا فیضی</span></span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
