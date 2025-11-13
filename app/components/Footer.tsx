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
    <footer className="mt-25 sm:mt-32 bg-white dark:bg-darker pt-8 pb-4 md:pt-16 md:pb-8">
      <Container>
        <div className="pb-4 mb-4 sm:pb-8 sm:mb-8 border-b border-b-(--seco)/25 dark:border-b-dark">
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
        <div className="flex items-start justify-between flex-wrap gap-5">
          <div>
            <span className="inline-block sm:text-2xl font-[dana-xb] mb-3 sm:mb-4">
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
              className="lg:w-52 sm:w-48 w-auto sm:px-0 px-12 object-cover"
              alt=""
            />
          </a>
        </div>
        <div className="flex text-(--seco)/80 sm:text-base text-sm items-center justify-center text-center sm:text-right sm:justify-between flex-wrap gap-y-2 gap-x-4 mt-8 sm:mt-10">
          <span>کلیه حقوق مادی و معنوی سایت برای <span className="text-(--prim)">پرشین بوکــ</span> محفوظ است.</span>
          <span>ساخته شده توصت پارسا فیضی</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
