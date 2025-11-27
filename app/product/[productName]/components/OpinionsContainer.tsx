"use client";

import ContentBox from "@/components/ContentBox";
import Button from "@/components/designSystem/Button";
import { ReactNode, useState } from "react";
import AiSummaryOpinion from "./AiSummaryOpinion";
import SortingBox from "@/components/SortingBox";
import AllOpinionsModal from "@/components/CommentComponents/AllOpinionsModal";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SeeOtherCTA from "@/components/CommentComponents/SeeOtherCTA";

function OpinionsContainer({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ContentBox
        htmlId="opinion"
        title="دیدگاه‌ کاربرها"
        leftButton={
          <Button className="lg:text-xs text-[11px] btn-out border-(--prim)! bg-(--prim)/0! hover:bg-(--prim)! hover:text-white! content-center text-(--prim)!">
            ثبت دیدگاه جدید
          </Button>
        }
      >
        <div>
          <AiSummaryOpinion />
          <div className="pt-4">
            <SortingBox
              seeOtherHandler={setIsModalOpen}
              itemsNumber={69}
              label="دیدگاه"
              tabs={[
                { title: "جدید ترین", href: "1", isActive: true },
                { title: "قدیمی ترین", href: "2" },
                { title: "مفید ترین", href: "3" },
              ]}
            />
            <div
              style={{ scrollbarWidth: "none" }}
              className="lg:max-h-[calc(100vh-10rem)] max-h-[calc(100vh-18rem)] overflow-y-auto"
            >
              {children}
              <SeeOtherCTA action={() => setIsModalOpen(true)} label="دیدگاه" />
            </div>
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

export default OpinionsContainer;
