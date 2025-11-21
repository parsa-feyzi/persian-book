import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import AnswerQuestionBox from "./AnswerQuestionBox";

function QuestionBox() {
  return (
    <article className="lg:mt-0 py-4 border-t border-(--seco)/20">
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="px-2 leading-7">
            ارزش خوندن رو داره؟ یا از این کتابای زرد و زیقیه؟
          </div>
          <div className="flex active:scale-95 cursor-pointer items-end gap-1 text-xs font-[dana-b] text-(--prim)">
            <DriveFileRenameOutlineOutlinedIcon sx={{ fontSize: 18 }} />
            <div>ثبت پاسخ</div>
          </div>
        </div>
      </div>
      <div className="px-6">
        <AnswerQuestionBox />
      </div>
    </article>
  );
}

export default QuestionBox;
