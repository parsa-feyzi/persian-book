import Image from "next/image";
import { Rating } from "@mui/material";
import ShowAllText from "../ShowAllText";

import Thumbs from "./Thumbs";
import ProfileComment from "./ProfileComment";

function OpinionBox() {
  return (
    <article className="lg:mt-0 py-3 border-t border-(--seco)/20">
      <div>
        <div className="flex justify-between items-center lg:mb-4 mb-2">
          <ProfileComment name="ممد نیگر زاده" role="خریدار" />
          <div className="lg:text-xs text-[11px] sm:block hidden font-[iransans] font-bold text-(--seco)/70">
            12 <span className="font-[dana-b]! font-medium">آبان</span> 1404
          </div>
        </div>
        <div className="lg:text-sm text-[13px] lg:px-2 px-1 lg:leading-7 text-black/75 leading-6.5">
          <ShowAllText
            openStateButton={<div className="hidden"></div>}
            closeStateButton={
              <div className="text-(--prim) lg:text-sm text-[13px] cursor-pointer flex items-center gap-1.5">
                ادامه...
              </div>
            }
          >
            این کتاب در ابتدا ممکنه به ادم حس زرد بودن بده ولی وقتی دارم این
            کتاب رو میخونم به خیلی از نکته هاش خودم تو زندگی رسیدم و تجربه کردم
            خیلی ارزشمنده که میشه همه این مطالب رو در یک کتاب پیدا کرد فقط باید
            با فکری باز خونده بشه و تعصبات کنار گذاشته بشه عمر انسان خیلی کوتاهه
            که بخواد خودش تک تک به این نکات برسه پس صد برابر بهتر که این کتاب رو
            بخونه و بهره مند شه فقط کتاب هایی اینچنینی باید بار ها و بار ها
            خونده بشن تا ملکه ذهنمون بشن حتی زمانی که تو زندگی حس کردیم گیر
            کردیم میتونیم . باز خونده بشه و تعصبات کنار گذاشته بشه عمر انسان
            خیلی کوتاهه که بخواد خودش تک تک به این نکات برسه پس صد برابر بهتر که
            این کتاب رو بخونه و بهره مند شه فقط کتاب هایی اینچنینی باید بار ها و
            بار ها خونده بشن تا ملکه ذهنمون بشن حتی زمانی که تو زندگی حس کردیم
            گیر کردیم میتونیم .
          </ShowAllText>
        </div>
      </div>
      <div className="flex justify-between items-end lg:mt-4 mt-2">
        <div className="lg:block hidden translate-y-1.5">
          <Rating
            name="half-rating-read"
            defaultValue={4}
            precision={1}
            readOnly
          />
        </div>
        <div className="block lg:hidden translate-y-1.5">
          <Rating
            name="half-rating-read"
            defaultValue={4}
            precision={1}
            size="small"
            readOnly
          />
        </div>
        <Thumbs />
      </div>
    </article>
  );
}

export default OpinionBox;
