import ShowAllText from "../ShowAllText";
import Thumbs from "./Thumbs";

function AnswerQuestionBox() {
  return (
    <article className="lg:mt-0 pt-1 pb-3">
      <div>
        <div className="flex items-center gap-3 mb-1">
          <div className="size-8 rounded-full shrink-0 mt-1 grow-0">
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
              <p className="text-xs font-[dana-db] text-black/70">
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
          12 <span className="font-[dana-db]">آبان</span> 1404
        </div>
        <Thumbs />
      </div>
    </article>
  );
}

export default AnswerQuestionBox;
