import { Rating } from "@mui/material";
import ShowAllText from "@/components/ShowAllText";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import Image from "next/image";

function AiSummaryOpinion() {
  return (
    <div
      id="aiSummaryOpinion"
      className="bg-linear-to-br from-background to-fuchsia-50/60 p-4 rounded-xl mb-12"
    >
      <div className="font-[dana-b] flex items-center justify-between w-full pb-1 mb-2 border-b-2 border-(--seco)/10">
        <div className="flex items-center gap-2">
          <div className="size-10 relative">
            <Image
              fill
              className="opacity-85 object-cover"
              src="/images/aiLogo.png"
              alt=""
            />
          </div>
          <div>
            خلاصه دیدگاه‌های کاربران
            <div className="font-[dana] text-[11px] text-(--seco) mt-2">
              تولید شده توصت هوش مصنوعی
            </div>
          </div>
        </div>
        <div>
          <div className="price text-2xl! text-end me-1">
            <span className="font-[dana] font-medium me-1.5 text-(--seco)/50 text-xs">
              (از مجموع <span className="price text-(--seco)/50!">2034</span>{" "}
              امتیاز)
            </span>
            4.5
            <span className="text-xs ps-1 text-black/70!">
              <span className="font-[dana] font-medium me-0.5">از</span>5
            </span>
          </div>
          <div dir="ltr">
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="leading-8 text-sm text-(--seco) px-2 pt-2">
        <ShowAllText
          openStateButton={
            <div className="text-(--prim) text-sm cursor-pointer flex items-center gap-1.5">
              مشاهده کمتر
              <div className="size-3">
                <ArrowDownIcon styles={{ rotate: "180deg" }} />
              </div>
            </div>
          }
          closeStateButton={
            <div className="text-(--prim) text-sm cursor-pointer flex items-center gap-1.5">
              مشاهده بیشتر
              <div className="size-3">
                <ArrowDownIcon />
              </div>
            </div>
          }
        >
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
        </ShowAllText>
      </div>
    </div>
  );
}

export default AiSummaryOpinion;
