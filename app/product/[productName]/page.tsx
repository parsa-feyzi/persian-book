import Container from "@/components/Container";
import Button from "@/components/designSystem/Button";
import InfoBox from "./components/InfoBox";
import DetailsBox from "./components/DetailsBox";
import ContentBox from "@/components/ContentBox";
import OpinionBox from "@/components/CommentComponents/OpinionBox";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import SortingBox from "@/components/SortingBox";
import QuestionBox from "@/components/CommentComponents/QuestionBox";
import PaymentsBox from "@/components/PaymentsBox";
import VerifiedIcon from "@mui/icons-material/Verified";
import AiSummaryOpinion from "./components/AiSummaryOpinion";
import SecoProductsBoxSwiper from "@/components/SecoProductsBoxSwiper";
import Image from "next/image";
import PaymentsBoxNav from "@/components/PaymentsBoxNav";
import ShowAllContentShadow from "@/components/ShowAllContentShadow";

function Product() {
  return (
    <div className="p-nav relative">
      {/* <div className="h-12 bg-white/80 rounded-2xl my-8"></div> */}
      <div className="lg:hidden fixed -z-1 left-0 right-0 w-full py-8 bg-(--base) flex justify-center">
        <img
          className="my-auto h-60 w-auto object-cover rounded-2xl"
          src="/images/Atomic-Habits.webp"
          alt=""
        />
      </div>
      <div className="lg:bg-white/0 bg-background lg:rounded-t-none rounded-t-4xl lg:mt-0 mt-76 pt-4">
        <Container>
          <div className="grid grid-cols-12 lg:mt-12">
            <div className="lg:col-span-9 col-span-12 xl:me-10 lg:me-6 me-0">
              <div className="grid grid-cols-12 xl:mb-16 lg:mb-14 mb-8 xl:gap-x-0 gap">
                <div className="xl:col-span-4 lg:col-span-3 hidden lg:flex justify-center">
                  <img
                    className="my-auto xl:h-80 h-60 relative w-auto object-cover rounded-2xl shadow-xl/1"
                    src="/images/Atomic-Habits.webp"
                    alt=""
                  />
                </div>
                <div className="xl:col-span-8 lg:col-span-9 col-span-12 xl:ms-0 lg:ms-6 ms-0 flex flex-col justify-between gap-4 py-2">
                  <div>
                    <div className="xl:text-3xl lg:text-[28px] md:text-xl text-lg md:pe-16 pe-8 leading-7 lg:font-[dana-xb] mt-2">
                      <span className="lg:block hidden">عادت‌های اتمی</span>
                      <span className="lg:hidden block">
                        کتاب{" "}
                        <span className="font-[dana-xb]">عادت‌های اتمی</span>{" "}
                        اثر <span className="font-[dana-db]">جیمز کلیر</span>{" "}
                        انشارات <span className="font-[dana-db]">نشر نوین</span>
                      </span>
                    </div>
                    <div
                      style={{ scrollbarWidth: "none" }}
                      className="flex whitespace-nowrap overflow-x-scroll! items-center gap-2 xl:mt-6 lg:mt-4 sm:mt-6 mt-4 w-full max-w-full overflow-auto"
                    >
                      <div className="flex items-center">
                        <div className="text-amber-300">
                          <StarRateRoundedIcon fontSize="small" />
                        </div>
                        <div className="price text-sm flex items-end">
                          4.5
                          <div className="font-[dana] whitespace-nowrap font-medium text-black/30 text-xs ms-1">
                            (امتیاز{" "}
                            <span className="price text-black/40! font-medium!">
                              2301
                            </span>{" "}
                            خریدار)
                          </div>
                        </div>
                      </div>
                      <a href="#opinion">
                        <Button className="flex! items-center sm:text-[13px] text-[11px] font-[dana-db] pb-0.5 pt-1 px-3 bg-linear-to-l from-fuchsia-50 to-white hover:bg-white/70 text-(--seco)">
                          <span className="size-5 relative mb-0.5 me-0.5">
                            <Image
                              fill
                              className="opacity-50 object-cover"
                              src="/images/aiLogo.png"
                              alt=""
                            />
                          </span>
                          <span className="whitespace-nowrap">
                            خلاصه دیدگاه‌ها
                          </span>
                        </Button>
                      </a>
                      <a href="#aiSummaryOpinion">
                        <Button className="flex! items-center sm:text-[13px] text-[11px] font-[dana-db] pb-0.5 pt-1 px-2 bg-white hover:bg-white/70 text-(--seco)">
                          <span className="price text-(--seco)! mx-1 mb-px">
                            236
                          </span>
                          <span>دیدگاه</span>
                          <span className="mb-0.5 sm:block hidden">
                            <KeyboardArrowLeftRoundedIcon fontSize="small" />
                          </span>
                          <span className="mb-0.5 block sm:hidden">
                            <KeyboardArrowLeftRoundedIcon
                              sx={{ fontSize: 17 }}
                            />
                          </span>
                        </Button>
                      </a>
                      <a href="#question">
                        <Button className="flex! items-center sm:text-[13px] text-[11px] font-[dana-db] pb-0.5 pt-1 px-2 bg-white hover:bg-white/70 text-(--seco)">
                          <span className="price text-(--seco)! mx-1 mb-px">
                            32
                          </span>
                          <span>پرسش</span>
                          <span className="mb-0.5 sm:block hidden">
                            <KeyboardArrowLeftRoundedIcon fontSize="small" />
                          </span>
                          <span className="mb-0.5 block sm:hidden">
                            <KeyboardArrowLeftRoundedIcon
                              sx={{ fontSize: 17 }}
                            />
                          </span>
                        </Button>
                      </a>
                    </div>
                    <p className="max-w-[40vw] lg:-webkit-box hidden text-[15px] ps-2 leading-8 lg:line-clamp-3 text-(--seco) xl:mt-8 mt-6">
                      فروشگاه کتاب ما با هدف ترویج کتاب‌ خوانی و دسترسی آسان به
                      منابع متنوع ایجاد شده است. اینجا می‌توانید تازه‌ ترین
                      رمان‌ها، کتاب‌های آموزشی و کودکانه را از ناشران معتبر تهیه
                      کنید. ما تجربه خرید آسان، قیمت مناسب و ارسال سریع را برای
                      دوست‌ داران کتاب فراهم کرده‌ایم.
                    </p>
                    <div className="xl:mt-10 lg:mt-8 mt-8 lg:px-8 px-2 sm:gap-0 gap-4 flex justify-evenly">
                      <InfoBox title="نویسنده" value="جیمز کلیر" />
                      <div className="w-0.5 relative after:absolute after:top-0 after:left-0 after:w-full after:h-3 after:bg-background before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-background bg-(--seco)/15"></div>
                      <InfoBox title="مترجم" value="هادی بهمنی" className="" />
                      <div className="w-0.5 relative after:absolute after:top-0 after:left-0 after:w-full after:h-3 after:bg-background before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-background bg-(--seco)/15"></div>
                      <InfoBox title="انتشارات" value="نشرنوین" />
                    </div>
                  </div>
                </div>
              </div>
              <ContentBox
                title="مشخصات"
                leftButton={
                  <Button className="text-amber-600/70 flex! gap-1.5 items-center bg-white/0! hover:bg-white/0! me-1">
                    <div className="sm:block hidden text-sm mt-1">
                      تضمین کیفیت کالا
                    </div>
                    <span className="sm:block hidden">
                      <VerifiedIcon sx={{ fontSize: 28 }} />
                    </span>
                    <span className="sm:hidden block">
                      <VerifiedIcon sx={{ fontSize: 24 }} />
                    </span>
                  </Button>
                }
              >
                <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-2 col-span-12">
                  <DetailsBox
                    title="سری چاپ"
                    value={<span className="text-black! price">{22}</span>}
                  />
                  <DetailsBox
                    title="نوع کاغذ"
                    value={<span className="font-[dana-db]">کاهی</span>}
                  />
                  <DetailsBox
                    title="نوع جلد"
                    value={<span className="font-[dana-db]">پلاستیکی</span>}
                  />
                  <DetailsBox
                    title="وزن"
                    value={
                      <div className="text-black! price">
                        340
                        <span className="font-[dana-l] text-sm ps-1">گرم</span>
                      </div>
                    }
                  />
                  <DetailsBox
                    title="تعداد صفحه"
                    value={<span className="text-black! price">{362}</span>}
                  />
                  <DetailsBox
                    title="تاریخ انتشار"
                    value={<div className="text-black! price">1401/10/18</div>}
                  />
                </div>
              </ContentBox>
              <ContentBox title="معرفی">
                <ShowAllContentShadow>
                  <div className="lg:text-base text-sm leading-8 text-black/70">
                    <p className="pb-2">
                      کتاب عادت‌های اتمی Atomic Habits اثر جیمز کلیر در سال 2018
                      منتشر شد. این کتاب در سال 1397 با ترجمه‌ی هادی بهمنی از
                      سوی نشر نوین در ایران به چاپ رسید.
                    </p>
                    <p className="pb-2">
                      کتاب عادت‌های اتمی یک چارچوب اثبات شده برای بهبود وضعیت
                      زندگی ارائه می‌دهد. جیمز کلیر، یکی از برجسته‌ترین متخصصان
                      جهان درزمینه‌ی ایجاد عادت، در این کتاب استراتژی‌های عملی
                      را معرفی می‌کند که به شما می‌آموزد دقیقاً چگونه عادت‌های
                      خوب در رفتارتان ایجاد، عادت‌های بد را ترک کنید و رفتارهای
                      کوچک اما تأثیرگذاری را که منجر به نتایج چشمگیر می‌شود را
                      بیاموزید. عادت‌های بد بارها و بارها تکرار می‌شوند و تمام
                      زندگی ما را تحت تأثیر قرار می‌دهند.
                    </p>
                    <p className="pb-2">
                      جیمز کلیر در کتاب عادت‌های اتمی با استفاده از مطالعاتش
                      درزمینه‌ی زیست‌شناسی، روانشناسی و علوم اعصاب راهنمای بسیار
                      قابل فهمی برای حذف‌ عادت‌های بد و جایگزین کردن آن‌ها با
                      عادت‌های خوب ارائه می‌دهد. در کتاب عادت‌های اتمی،
                      خوانندگان با داستان‌های واقعی از دارندگان مدال طلای
                      المپیک، هنرمندان برنده‌ی جایزه، رهبران تجارت، پزشکان
                      نجات‌دهنده‌ی زندگی و کمدین‌های ستاره‌ای که از علم عادت‌های
                      کوچک برای تسلط بر کار و زندگی خود استفاده می‌کنند، روبه‌رو
                      می‌شوند.
                    </p>
                  </div>
                </ShowAllContentShadow>
              </ContentBox>
              <ContentBox
                htmlId="opinion"
                title="دیدگاه‌ کاربرها"
                leftButton={
                  <Button className="lg:text-xs text-[11px] btn-out border-(--prim)! bg-(--prim)/0! hover:bg-(--prim)! hover:text-white! content-center text-(--prim)!">
                    ثبت دیدگاه جدید
                  </Button>
                }
              >
                <div>
                  <AiSummaryOpinion />
                  <div className="pt-4">
                    <SortingBox
                      itemsNumber={69}
                      label="دیدگاه"
                      tabs={[
                        { title: "جدید ترین", href: "1", isActive: true },
                        { title: "قدیمی ترین", href: "2" },
                        { title: "مفید ترین", href: "3" },
                      ]}
                    />
                    <div>
                      <OpinionBox />
                      <OpinionBox />
                      <OpinionBox />
                    </div>
                  </div>
                </div>
              </ContentBox>
              <ContentBox
                htmlId="question"
                title="پرسش‌ و پاسخ"
                leftButton={
                  <Button className="text-xs font-[dana-db] btn-out border-(--prim)! bg-(--prim)/0! hover:bg-(--prim)! hover:text-white! content-center text-(--prim)!">
                    ثبت پرسش جدید
                  </Button>
                }
              >
                <div className="mt-10">
                  <SortingBox
                    itemsNumber={69}
                    label="پرسش"
                    tabs={[
                      { title: "جدید ترین", href: "1", isActive: true },
                      { title: "قدیمی ترین", href: "2" },
                      { title: "بیشترین پاسخ", href: "3" },
                    ]}
                  />
                  <div>
                    <QuestionBox />
                    <QuestionBox />
                    <QuestionBox />
                  </div>
                </div>
              </ContentBox>
            </div>
            <div className="lg:block hidden col-span-3 relative pt-4">
              <PaymentsBox />
            </div>
            <div className="lg:hidden block z-1">
              <PaymentsBoxNav />
            </div>
          </div>
          <div className="mt-10">
            <SecoProductsBoxSwiper
              title={
                <span className="mb-8 lg:text-2xl relative after:w-[calc(100%-3rem)] after:lg:h-[3px] after:h-0.5 after:rounded-full after:bg-(--prim) after:absolute after:-bottom-2 after:right-0">
                  کتاب‌های مشابه
                </span>
              }
              linkToAll="/"
              maxSlide={6}
              bgColor="#014121"
              textColor="#000101"
              bgOpacity={3}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Product;
