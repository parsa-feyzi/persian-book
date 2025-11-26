import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import AnswerQuestionBox from "./AnswerQuestionBox";
import SingleAnswerQuestionBox from "./SingleAnswerQuestionBox";

function QuestionBox() {
  return (
    <article className="lg:mt-0 lg:py-4 pt-4 pb-8 border-t border-(--seco)/20">
      <div>
        <div className="lg:flex justify-between items-center lg:mb-4 mb-2">
          <div className="lg:text-base sm:text-sm text-[13px] px-2 leading-7 lg:line-clamp-none line-clamp-2">
            ارزش خوندن رو داره؟ یا از این کتابای زرد و زیقیه؟
          </div>
          <div className="flex justify-end lg:active:scale-95 lg:mt-0 mt-2 cursor-pointer items-end lg:gap-1 gap-px lg:text-xs text-[10px] font-[dana-b] text-(--prim)">
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
      <div className="lg:block hidden px-6">
        <AnswerQuestionBox />
      </div>
      <div className="lg:hidden block">
        <SingleAnswerQuestionBox />
      </div>
    </article>
  );
}

export default QuestionBox;
