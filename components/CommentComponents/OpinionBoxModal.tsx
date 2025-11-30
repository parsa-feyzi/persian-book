import ProfileComment from "./ProfileComment";
import Thumbs from "./Thumbs";
import { Rating } from "@mui/material";
import Closer from "../Closer";
import { I_IsModalOpen } from "@/types/types";
import { ReactNode } from "react";

type T_Props = { children: ReactNode } & I_IsModalOpen

function OpinionBoxModal({ children, isModalOpen, setIsModalOpen }: T_Props) {
  return (
    <div
      className={`${
        isModalOpen ? "top-0 " : "top-[100vh] "
      } fixed left-0 duration-300 right-0 w-full h-screen bg-white z-10`}
    >
      <div className="px-4">
          <div className="flex justify-between py-4 border-b border-(--seco)/20 items-center">
            <ProfileComment name="ممد نیگرزاده" role="خریدار" size="lg" />
            <Closer setIsOpen={setIsModalOpen} />
          </div>
      </div>
      <div className="overflow-y-auto! px-4 max-h-[calc(100vh-7rem)]! pb-8">
        <div className="mt-4">
          <Rating
            name="half-rating-read"
            defaultValue={4}
            precision={1}
            readOnly
          />
        </div>
        <div className="pe-2 mb-4">
          {children}
        </div>
        <div className="absolute bottom-0 left-0 w-full px-4 bg-white items-center">
          <div className="flex justify-between border-t py-3 border-(--seco)/20">
              <div className="lg:text-xs text-[11px] font-[iransans] font-bold text-(--seco)/70">
                12 <span className="font-[dana-b]! font-medium">آبان</span> 1404
              </div>
              <Thumbs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpinionBoxModal;
