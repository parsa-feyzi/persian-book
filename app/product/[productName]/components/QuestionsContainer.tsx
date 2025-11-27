"use client";

import AllOpinionsModal from "@/components/CommentComponents/AllOpinionsModal";
import SeeOtherCTA from "@/components/CommentComponents/SeeOtherCTA";
import ContentBox from "@/components/ContentBox";
import Button from "@/components/designSystem/Button";
import SortingBox from "@/components/SortingBox";
import { ReactNode, useState } from "react";

function QuestionsContainer({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ContentBox
        htmlId="question"
        title="پرسش‌ و پاسخ"
        leftButton={
          <Button className="text-xs font-[dana-db] btn-out border-(--prim)! bg-(--prim)/0! hover:bg-(--prim)! hover:text-white! content-center text-(--prim)!">
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
            style={{ scrollbarWidth: "none" }}
            className="lg:max-h-[calc(100vh-10rem)] max-h-[calc(100vh-18rem)] overflow-y-auto"
          >
            {children}
            <SeeOtherCTA action={() => setIsModalOpen(true)} label="پرسش" />
          </div>
        </div>
      </ContentBox>
      <AllOpinionsModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
}

export default QuestionsContainer;
