import { Rating } from "@mui/material";

import ShowAllContentShadow from "@/components/ShowAllContentShadow";


function AiSummaryOpinion() {
  return (
    <div
      id="aiSummaryOpinion"
      className="relative overflow-hidden bg-background p-4 rounded-xl lg:mb-12 mb-8"
    >
      <div className="font-[dana-b] flex items-center justify-between w-full pb-1 mb-2 border-b-2 border-(--seco)/10">
        <div className="flex items-center lg:gap-2">
          <div className="lg:size-10 size-16 lg:relative absolute lg:top-0 -top-2.5 lg:right-0 -right-2">
            <img
              className="lg:opacity-85 opacity-20 object-cover"
              src="/images/aiLogo.png"
              alt=""
            />
          </div>
          <div className="lg:text-base  text-sm">
            خلاصه دیدگاه‌های کاربران
            <div className="font-[dana] lg:text-[11px] text-[10px] text-(--seco) lg:mt-2 mt-1.5">
              تولید شده توصت هوش مصنوعی
            </div>
          </div>
        </div>
        <div>
          <div className="price lg:text-2xl! text-lg text-end me-1">
            <span className="lg:inline-block hidden font-[dana] font-medium me-1.5 text-(--seco)/50 text-xs">
              (از مجموع <span className="price text-(--seco)/50!">2034</span>{" "}
              امتیاز)
            </span>
            <span className="lg:hidden inline-block price text-(--seco)/50! pe-1 text-[10px]"> 
               (2043) 
            </span> 
            4.5
            <span className="lg:text-xs text-[10px] ps-1 text-black/70!">
              <span className="font-[dana] font-medium me-0.5">از</span>5
            </span>
          </div>
          <div dir="ltr" className="lg:block hidden">
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
          </div>
          <div dir="ltr" className="block lg:hidden">
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              size="small"
              precision={0.5}
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="lg:leading-8 leading-7 lg:text-sm text-[13px] text-(--seco) lg:px-2 lg:pt-2">
        <ShowAllContentShadow initialHeight={9} shadowStyles="after:from-background/95!">
          فروشگاه پرشین بوکــ با هدف ترویج کتاب‌ خوانی و دسترسی آسان به منابع
          متنوع ایجاد شده است. اینجا می‌توانید تازه‌ ترین رمان‌ها، کتاب‌های
          آموزشی و کودکانه را از ناشران معتبر تهیه کنید. ما تجربه خرید آسان،
          قیمت مناسب و ارسال سریع را برای دوست‌ داران کتاب فراهم کرده‌ایم.
          فروشگاه پرشین بوکــ با هدف ترویج کتاب‌ خوانی و دسترسی آسان به منابع
          متنوع ایجاد شده است. اینجا می‌توانید تازه‌ ترین رمان‌ها، کتاب‌های
          آموزشی و کودکانه را از ناشران معتبر تهیه کنید. ما تجربه خرید آسان،
          قیمت مناسب و ارسال سریع را برای دوست‌ داران کتاب فراهم کرده‌ایم. متنوع
          ایجاد شده است. اینجا می‌توانید تازه‌ ترین رمان‌ها، کتاب‌های آموزشی و
          کودکانه را از ناشران معتبر تهیه کنید. ما تجربه خرید آسان، قیمت مناسب و
          ارسال سریع را برای دوست‌ داران کتاب فراهم کرده‌ایم. فروشگاه پرشین
          بوکــ با هدف ترویج کتاب‌ خوانی و دسترسی آسان به منابع متنوع ایجاد شده
          است. اینجا می‌توانید تازه‌ ترین رمان‌ها، کتاب‌های آموزشی و کودکانه را
          از ناشران معتبر تهیه کنید. ما تجربه خرید آسان، قیمت مناسب و ارسال سریع
          را برای دوست‌ داران کتاب فراهم کرده‌ایم.
        </ShowAllContentShadow>
      </div>
    </div>
  );
}

export default AiSummaryOpinion;
