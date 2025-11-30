"use client";

import ContentBox from "@/components/ContentBox";
import Button from "@/components/designSystem/Button";
import { ReactNode, useState } from "react";
import AiSummaryOpinion from "./AiSummaryOpinion";
import SortingBox from "@/components/SortingBox";
import AllCommentsModal from "@/components/CommentComponents/AllCommentsModal";
import SeeOtherCTA from "@/components/CommentComponents/SeeOtherCTA";
import OpinionBox from "@/components/CommentComponents/OpinionBox";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import { Rating } from "@mui/material";

function OpinionsContainer({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ContentBox
        htmlId="opinion"
        title="دیدگاه‌ کاربرها"
        leftButton={
          <Button btnType="outLine" size="sm" >
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
              <div className="md:hidden block">
                <OpinionBox />
                <OpinionBox />
                <OpinionBox />
                <OpinionBox />
                <OpinionBox />
              </div>
              <div className="md:block hidden">{children}</div>
              <SeeOtherCTA action={() => setIsModalOpen(true)} label="دیدگاه" />
            </div>
          </div>
        </div>
      </ContentBox>
      {/* modal */}
      <AllCommentsModal
        actionButton={
          <Button btnType="rounded" size="lg" className="absolute! left-5! bottom-4!">
            <div className="translate-y-0.5">ثبت دیدگاه</div>
              <MapsUgcRoundedIcon />
          </Button>
        }
        headerContent={
          <div className="my-4">
            <div className="price text-3xl me-1">
              4.5
              <span className="text-lg ps-1">
                <span className="font-[dana] font-medium me-0.5">از</span>5
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div dir="ltr" className="rotate-y-180">
                <Rating
                  name="half-rating-read"
                  defaultValue={4.5}
                  precision={0.5}
                  readOnly
                />
              </div>
              <div className="font-[dana] mb-1.5 font-medium me-1.5 text-(--seco) text-xs">
                از مجموع <span className="price text-(--seco)!">2034</span>{" "}
                امتیاز
              </div>
            </div>
          </div>
        }
        itemsLenght={1204}
        title="دیدگاه"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        {children}
      </AllCommentsModal>
    </>
  );
}

export default OpinionsContainer;
