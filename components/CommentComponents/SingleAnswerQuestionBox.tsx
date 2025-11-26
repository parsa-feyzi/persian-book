import Image from "next/image";
import Thumbs from "./Thumbs";
import ProfileComment from "./ProfileComment";

function SingleAnswerQuestionBox() {
  return (
    <div className="relative cursor-pointer active:scale-95">
      <article className="bg-background relative z-1 border border-black/10 rounded-xl py-2 px-5">
        <div>
          <ProfileComment name="پارسا فیضی" role="خریدار" size="sm" />
          <div className="text-[13px] mt-3 leading-6 line-clamp-2 text-black/70">
            این کتاب در ابتدا ممکنه به ادم حس زرد بودن بده ولی وقتی دارم این
            کتاب رو میخونم به خیلی از نکته هاش خودم تو زندگی رسیدم و تجربه کردم
            خیلی ارزشمنده که میشه همه این
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="text-xs font-[iransans] font-bold text-(--seco)/70">
            12 <span className="font-[dana-b]! font-medium">آبان</span> 1404
          </div>
          <Thumbs />
        </div>
      </article>
      <div className="absolute bg-background border border-black/10 w-[calc(100%-1.5rem)] rounded-xl h-8 -bottom-6 z-0 left-1/2 -translate-1/2"></div>
    </div>
  );
}

export default SingleAnswerQuestionBox;
