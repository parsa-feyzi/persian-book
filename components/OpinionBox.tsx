import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import { Rating } from "@mui/material";
import ShowAllText from "./ShowAllText";
import ArrowDownIcon from "./icons/ArrowDownIcon";

function OpinionBox() {
  return (
    <article className="lg:mt-0 py-3 border-t border-(--seco)/20">
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full shrink-0 mt-1 grow-0">
              <img
                className="size-full inline-block"
                src="https://dkstatics-public.digikala.com/digikala-content-x-profile/730b1da13c1ab319e28246314a4e9ab67267826b_1737805761.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                alt=""
                title=""
                style={{ objectFit: "cover", borderRadius: "20px" }}
              />
            </div>
            <div>
              <div className="flex items-center">
                <p className="text-sm font-[dana-b] text-black/70">
                  پردیس افضل زاده
                </p>
                <div className="flex">
                  <div className="dot"></div>
                </div>
                <div
                  className="inline-flex items-center border-none pr-0 Badge_Badge__QIekq Badge_Badge--small__ElV6O px-2 text-caption-strong"
                  style={{
                    backgroundColor: "transparent",
                    color: "var(--color-hint-text-success)",
                    borderColor: "var(--color-hint-text-success)",
                  }}
                >
                  <p className="inline-block text-xs text-(--prim)">خریدار</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-xs font-[iransans] font-bold text-(--seco)/70">
            12 <span className="font-[dana-db]">آبان</span> 1404
          </div>
        </div>
        <div className="text-sm px-2 leading-7">
          <ShowAllText 
          openStateButton={<div className="hidden"></div>}
          closeStateButton={
            <div className="text-(--prim) text-sm cursor-pointer flex items-center gap-1.5">
              ادامه
              <div className="size-3 mb-0.5">
                <ArrowDownIcon />
              </div>
            </div>
          }
          >
            این کتاب در ابتدا ممکنه به ادم حس زرد بودن بده ولی وقتی دارم این کتاب
            رو میخونم به خیلی از نکته هاش خودم تو زندگی رسیدم و تجربه کردم خیلی
            ارزشمنده که میشه همه این مطالب رو در یک کتاب پیدا کرد فقط باید با فکری
            باز خونده بشه و تعصبات کنار گذاشته بشه عمر انسان خیلی کوتاهه که بخواد
            خودش تک تک به این نکات برسه پس صد برابر بهتر که این کتاب رو بخونه و
            بهره مند شه فقط کتاب هایی اینچنینی باید بار ها و بار ها خونده بشن تا
            ملکه ذهنمون بشن حتی زمانی که تو زندگی حس کردیم گیر کردیم میتونیم .
            باز خونده بشه و تعصبات کنار گذاشته بشه عمر انسان خیلی کوتاهه که بخواد
            خودش تک تک به این نکات برسه پس صد برابر بهتر که این کتاب رو بخونه و
            بهره مند شه فقط کتاب هایی اینچنینی باید بار ها و بار ها خونده بشن تا
            ملکه ذهنمون بشن حتی زمانی که تو زندگی حس کردیم گیر کردیم میتونیم .
          </ShowAllText>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <Rating
            name="half-rating-read"
            defaultValue={4}
            precision={1}
            readOnly
          />
        </div>
        <div className="flex gap-4 text-(--seco)/70">
          <div className="flex items-center cursor-pointer">
            <span className="price text-(--seco)/70! pe-1 text-sm! mt-0.5">
              69
            </span>
            <ThumbDownOffAltOutlinedIcon
              fontSize="small"
              className="rotate-180"
            />
          </div>
          <div className="flex items-center cursor-pointer">
            <span className="price text-(--seco)/70! pe-1 text-sm! mt-0.5">
              0
            </span>
            <ThumbDownOffAltOutlinedIcon
              fontSize="small"
              className="rotate-y-180"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default OpinionBox;
