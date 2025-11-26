import ShowAllText from "../ShowAllText";
import ProfileComment from "./ProfileComment";
import Thumbs from "./Thumbs";
import Image from "next/image";

function AnswerQuestionBox() {
  return (
    <article className="lg:mt-0 pt-1 pb-3">
      <div>
        <ProfileComment name="آقا خسرو" role="خریدار" size="sm" />
        <div className="text-sm px-10 leading-7 text-black/70">
          <ShowAllText
            openStateButton={<div className="hidden"></div>}
            closeStateButton={
              <div className="text-(--prim) text-sm cursor-pointer flex items-center gap-1.5">
                ادامه...
              </div>
            }
          >
            این کتاب در ابتدا ممکنه به ادم حس زرد بودن بده ولی وقتی دارم این
            کتاب رو میخونم به خیلی از نکته هاش خودم تو زندگی رسیدم و تجربه کردم
            خیلی ارزشمنده که میشه همه این 
          </ShowAllText>
        </div>
      </div>
      <div className="flex justify-between px-10 items-center mt-2">
        <div className="text-[13px] font-[iransans] font-bold text-(--seco)/70">
          12 <span className="font-[dana-b]! font-medium">آبان</span> 1404
        </div>
        <Thumbs />
      </div>
    </article>
  );
}

export default AnswerQuestionBox;
