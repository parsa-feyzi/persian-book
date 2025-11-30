import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import AnswerQuestionBox from "./AnswerQuestionBox";
import SingleAnswerQuestionBox from "./SingleAnswerQuestionBox";

function QuestionBox({ isInModal }: { isInModal?: boolean }) {
  return (
    <article className="border-t border-(--seco)/20 lg:mt-0 lg:py-4 pt-4 pb-8">
      <div>
        <div className={`${isInModal ? "flex mb-4" : "md:flex md:mb-4"} justify-between items-start mb-2`}>
          <div className={`${isInModal ? "text-sm font-[dana-b]" : "lg:text-base sm:text-sm text-[13px]"} px-2 leading-7 lg:line-clamp-none line-clamp-2`}>
            ارزش خوندن رو داره؟ یا از این کتابای زرد و زیقیه؟
          </div>
          <div className={`${isInModal ? "mt-1" : "md:mt-1 mt-2"} flex justify-end lg:active:scale-95 cursor-pointer items-end lg:gap-1 gap-px lg:text-xs text-[10px] font-[dana-b] text-(--prim)`}>
            <div className="lg:block hidden">
              <DriveFileRenameOutlineOutlinedIcon sx={{ fontSize: 18 }} />
            </div>
            <div className="lg:hidden block">
              <DriveFileRenameOutlineOutlinedIcon sx={{ fontSize: 14 }} />
            </div>
            <div className="whitespace-nowrap">ثبت پاسخ</div>
          </div>
        </div>
      </div>
      <div className={isInModal ? "ps-4" : "md:block hidden px-6"}>
        <AnswerQuestionBox />
      </div>
      <div className={isInModal ? "hidden" : "md:hidden block"}>
        <SingleAnswerQuestionBox question="ارزش خوندن رو داره؟ یا از این کتابای زرد و زیقیه؟" />
      </div>
    </article>
  );
}

export default QuestionBox;
