import ShowAllText from "../ShowAllText";
import ProfileComment from "./ProfileComment";
import Thumbs from "./Thumbs";

function AnswerQuestionBox({ isSecoTheme }: { isSecoTheme?: boolean }) {
  return (
    <article
      className={
        isSecoTheme
          ? "bg-background relative z-1 border border-black/10 rounded-xl py-2 px-5 mb-3"
          : "lg:mt-0 pt-1 pb-3"
      }
    >
      <div>
        <ProfileComment name="آقا خسرو" role="خریدار" size="sm" />
          {isSecoTheme ? (
            <div className="text-xs mt-3 leading-6 text-black/70">
              این کتاب در ابتدا ممکنه به ادم حس زرد بودن بده ولی وقتی دارم این
              کتاب رو میخونم به خیلی از نکته هاش خودم تو زندگی رسیدم و تجربه
              کردم خیلی ارزشمنده که میشه همه این
            </div>
          ) : (
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
              کتاب رو میخونم به خیلی از نکته هاش خودم تو زندگی رسیدم و تجربه
              کردم خیلی ارزشمنده که میشه همه این
            </ShowAllText>
        </div>
          )}
      </div>
      <div
        className={`${
          isSecoTheme ? "mt-3" : "px-10 mt-2"
        } flex justify-between items-center`}
      >
        <div
          className={`${
            isSecoTheme ? "text-xs" : "text-[13px]"
          } font-[iransans] font-bold text-(--seco)/70`}
        >
          12 <span className="font-[dana-b]! font-medium">آبان</span> 1404
        </div>
        <Thumbs />
      </div>
    </article>
  );
}

export default AnswerQuestionBox;
