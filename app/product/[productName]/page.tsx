import Container from "@/components/Container";
import Button from "@/components/designSystem/Button";
import InfoBox from "./InfoBox";
import PriceBox from "./PriceBox";
import DetailsBox from "./DetailsBox";
import ContentBox from "@/components/ContentBox";
import ShowAllText from "@/components/ShowAllText";
import OpinionBox from "@/components/OpinionBox";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

function Product() {
  return (
    <div className="p-nav relative">
      <Container>
        <div className="h-12 bg-white/80 rounded-2xl my-8"></div>
        <div className="grid grid-cols-12">
          <div className="col-span-9 me-10">
            <div className="grid grid-cols-12 mb-16">
              <div className="col-span-4 flex justify-center">
                <img
                  className="h-80 w-auto my-auto object-cover rounded-2xl shadow-xl/1"
                  src="/images/Atomic-Habits.webp"
                  alt=""
                />
              </div>
              <div className="col-span-8 flex flex-col justify-between gap-4 py-2">
                <div>
                  <div className="text-3xl font-[dana-xb] mt-2">
                    عادت‌های اتمی
                  </div>
                  <div className="flex items-center gap-2 mt-6">
                    <div className="flex items-center">
                      <div className="text-amber-300">
                        <StarRateRoundedIcon fontSize="small" />
                      </div>
                      <div className="price text-sm">
                        4.5
                        <span className="font-[dana] font-medium text-black/30 text-xs ms-1">
                          (امتیاز{" "}
                          <span className="price text-black/40! font-medium!">
                            2301
                          </span>{" "}
                          خریدار)
                        </span>
                      </div>
                    </div>
                    <a href="#opinion">
                      <Button className="flex! items-center text-[13px] font-[dana-db] pb-0.5 pt-1 px-3 bg-linear-to-l from-fuchsia-50 to-white hover:bg-white/70 text-(--seco)">
                        <span className="size-5 mb-0.5 me-0.5">
                          <img
                            className="size-full opacity-50 object-cover"
                            src="/images/aiLogo.png"
                            alt=""
                          />
                        </span>
                        <span>خلاصه دیدگاه‌ها</span>
                      </Button>
                    </a>
                    <a href="#aiSummaryOpinion">
                      <Button className="flex! items-center text-[13px] font-[dana-db] pb-0.5 pt-1 px-2 bg-white hover:bg-white/70 text-(--seco)">
                        <span className="price text-(--seco)! mx-1 mb-px">
                          236
                        </span>
                        <span>دیدگاه</span>
                        <span className="mb-0.5">
                          <KeyboardArrowLeftRoundedIcon fontSize="small" />
                        </span>
                      </Button>
                    </a>
                    <a href="#question">
                      <Button className="flex! items-center text-[13px] font-[dana-db] pb-0.5 pt-1 px-2 bg-white hover:bg-white/70 text-(--seco)">
                        <span className="price text-(--seco)! mx-1 mb-px">
                          32
                        </span>
                        <span>پرسش</span>
                        <span className="mb-0.5">
                          <KeyboardArrowLeftRoundedIcon fontSize="small" />
                        </span>
                      </Button>
                    </a>
                  </div>
                  <p className="max-w-[40vw] text-[15px] ps-2 leading-8 line-clamp-3 text-(--seco) mt-8">
                    فروشگاه کتاب ما با هدف ترویج کتاب‌ خوانی و دسترسی آسان به
                    منابع متنوع ایجاد شده است. اینجا می‌توانید تازه‌ ترین
                    رمان‌ها، کتاب‌های آموزشی و کودکانه را از ناشران معتبر تهیه
                    کنید. ما تجربه خرید آسان، قیمت مناسب و ارسال سریع را برای
                    دوست‌ داران کتاب فراهم کرده‌ایم.
                  </p>
                  <div className="mt-10 px-8 flex justify-evenly">
                    <InfoBox title="نویسنده" value="جیمز کلیر" />
                    <div className="w-0.5 bg-(--seco)/15"></div>
                    <InfoBox title="مترجم" value="هادی بهمنی" className="" />
                    <div className="w-0.5 bg-(--seco)/15"></div>
                    <InfoBox title="انتشارات" value="نشرنوین" />
                  </div>
                </div>
              </div>
            </div>
            <ContentBox title="ویژگی‌ها">
              <div className="grid grid-cols-6 gap-2 col-span-12">
                <DetailsBox
                  title="سری چاپ"
                  value={<span className="price">{22}</span>}
                />
                <DetailsBox
                  title="نوع کاغذ"
                  value={
                    <span className="text-black font-[dana-db]">کاهی</span>
                  }
                />
                <DetailsBox
                  title="نوع جلد"
                  value={
                    <span className="text-black font-[dana-db]">پلاستیکی</span>
                  }
                />
                <DetailsBox
                  title="وزن"
                  value={
                    <div className="price">
                      340
                      <span className="font-[dana-l] text-sm ps-1">گرم</span>
                    </div>
                  }
                />
                <DetailsBox
                  title="تعداد صفحه"
                  value={<span className="price">{362}</span>}
                />
                <DetailsBox
                  title="تاریخ انتشار"
                  value={<div className="price">1401/10/18</div>}
                />
              </div>
            </ContentBox>
            <ContentBox title="معرفی">
              <div className="leading-8 text-black/70">
                <p className="pb-2">
                  کتاب عادت‌های اتمی Atomic Habits اثر جیمز کلیر در سال 2018
                  منتشر شد. این کتاب در سال 1397 با ترجمه‌ی هادی بهمنی از سوی
                  نشر نوین در ایران به چاپ رسید.
                </p>
                <p className="pb-2">
                  کتاب عادت‌های اتمی یک چارچوب اثبات شده برای بهبود وضعیت زندگی
                  ارائه می‌دهد. جیمز کلیر، یکی از برجسته‌ترین متخصصان جهان
                  درزمینه‌ی ایجاد عادت، در این کتاب استراتژی‌های عملی را معرفی
                  می‌کند که به شما می‌آموزد دقیقاً چگونه عادت‌های خوب در
                  رفتارتان ایجاد، عادت‌های بد را ترک کنید و رفتارهای کوچک اما
                  تأثیرگذاری را که منجر به نتایج چشمگیر می‌شود را بیاموزید.
                  عادت‌های بد بارها و بارها تکرار می‌شوند و تمام زندگی ما را تحت
                  تأثیر قرار می‌دهند.
                </p>
                <p className="pb-2">
                  جیمز کلیر در کتاب عادت‌های اتمی با استفاده از مطالعاتش
                  درزمینه‌ی زیست‌شناسی، روانشناسی و علوم اعصاب راهنمای بسیار
                  قابل فهمی برای حذف‌ عادت‌های بد و جایگزین کردن آن‌ها با
                  عادت‌های خوب ارائه می‌دهد. در کتاب عادت‌های اتمی، خوانندگان با
                  داستان‌های واقعی از دارندگان مدال طلای المپیک، هنرمندان
                  برنده‌ی جایزه، رهبران تجارت، پزشکان نجات‌دهنده‌ی زندگی و
                  کمدین‌های ستاره‌ای که از علم عادت‌های کوچک برای تسلط بر کار و
                  زندگی خود استفاده می‌کنند، روبه‌رو می‌شوند.
                </p>
              </div>
            </ContentBox>
            <ContentBox
              htmlId="opinion"
              title="دیدگاه‌ها"
              leftButton={
                <Button className="text-xs font-[dana-db] btn-out border-(--prim)! bg-(--prim)/0! hover:bg-(--prim)! hover:text-white! content-center text-(--prim)!">
                  ثبت دیدگاه جدید
                </Button>
              }
            >
              <div id="aiSummaryOpinion">
                <div className="bg-linear-to-tl from-background to-fuchsia-50/70 p-4 rounded-xl mb-12">
                  <div className="font-[dana-b] flex items-center gap-2 w-full pb-2 mb-2 border-b-2 border-(--seco)/10">
                    <div className="size-10">
                      <img
                        className="size-full opacity-85 object-cover"
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
                      فروشگاه پرشین بوکــ با هدف ترویج کتاب‌ خوانی و دسترسی آسان
                      به منابع متنوع ایجاد شده است. اینجا می‌توانید تازه‌ ترین
                      رمان‌ها، کتاب‌های آموزشی و کودکانه را از ناشران معتبر تهیه
                      کنید. ما تجربه خرید آسان، قیمت مناسب و ارسال سریع را برای
                      دوست‌ داران کتاب فراهم کرده‌ایم. فروشگاه پرشین بوکــ با
                      هدف ترویج کتاب‌ خوانی و دسترسی آسان به منابع متنوع ایجاد
                      شده است. اینجا می‌توانید تازه‌ ترین رمان‌ها، کتاب‌های
                      آموزشی و کودکانه را از ناشران معتبر تهیه کنید. ما تجربه
                      خرید آسان، قیمت مناسب و ارسال سریع را برای دوست‌ داران
                      کتاب فراهم کرده‌ایم.
                    </ShowAllText>
                  </div>
                </div>
                <div>
                  <OpinionBox />
                  <OpinionBox />
                  <OpinionBox />
                </div>
              </div>
            </ContentBox>
            <ContentBox
              htmlId="question"
              title="پرسش‌ها"
              leftButton={
                <Button className="text-xs font-[dana-db] btn-out border-(--prim)! bg-(--prim)/0! hover:bg-(--prim)! hover:text-white! content-center text-(--prim)!">
                  ثبت پرسش جدید
                </Button>
              }
            >
              <div></div>
            </ContentBox>
          </div>
          <div className="col-span-3 relative pt-4">
            <div className="sticky! top-28! flex flex-col justify-between borde border-(--seco)/10 bg-white rounded-xl p-5">
              <div>
                <PriceBox
                  title="قیمت"
                  value={(250000).toLocaleString()}
                  isPrice
                />
                <PriceBox
                  title="سود شما"
                  value={(30000).toLocaleString()}
                  isPrice
                />
                <PriceBox
                  title="تخفیف"
                  value={(20).toLocaleString()}
                  isDiscount
                />
              </div>
              <div className="mt-8">
                <PriceBox
                  title="موجودی کیف پول"
                  value={(250000).toLocaleString()}
                  isPrice
                  size="sm"
                />
                <div className="mb-2"></div>
                <Button className="w-full py-3 rounded-lg! text-white bg-(--prim)! hover:bg-(--prim)/90!">
                  <div className="duration-300">افزودن به سبد خرید</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </Container>
    </div>
  );
}

export default Product;
