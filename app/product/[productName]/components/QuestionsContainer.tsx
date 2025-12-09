"use client";
import { ReactNode, useState } from "react";

import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import AllCommentsModal from "@/components/CommentComponents/AllCommentsModal";
import QuestionBox from "@/components/CommentComponents/QuestionBox";
import SeeOtherCTA from "@/components/CommentComponents/SeeOtherCTA";
import ContentBox from "@/components/ContentBox";
import Button from "@/components/designSystem/Button";
import SortingBox from "@/components/SortingBox";


function QuestionsContainer({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ContentBox
        htmlId="question"
        title="پرسش‌ و پاسخ"
        leftButton={
          <Button btnType="outLine" size="sm" >
            ثبت پرسش جدید
          </Button>
        }
      >
        <div className="mt-10">
          <SortingBox
            seeOtherHandler={setIsModalOpen}
            itemsNumber={69}
            label="پرسش"
            tabs={[
              { title: "جدید ترین", href: "1", isActive: true },
              { title: "قدیمی ترین", href: "2" },
              { title: "بیشترین پاسخ", href: "3" },
            ]}
          />
          <div
            className="scrollbar_hidden lg:max-h-[calc(100vh-10rem)] max-h-[calc(100vh-18rem)] overflow-y-auto"
          >
            <div className="md:hidden block">
              <QuestionBox />
              <QuestionBox />
              <QuestionBox />
              <QuestionBox />
              <QuestionBox />
            </div>
            <div className="md:block hidden">{children}</div>
            <SeeOtherCTA action={() => setIsModalOpen(true)} label="پرسش" />
          </div>
        </div>
      </ContentBox>
      <AllCommentsModal
        actionButton={
          <Button btnType="rounded" size="lg" className="absolute left-5 bottom-4">
            <div className="translate-y-0.5">ثبت پرسش</div>
              <HelpOutlineOutlinedIcon />
          </Button>
        }
        itemsLenght={1302}
        title="پرسش"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        {children}
      </AllCommentsModal>
    </>
  );
}

export default QuestionsContainer;
