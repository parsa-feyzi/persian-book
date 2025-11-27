import { I_IsModalOpen } from "@/types/types";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import Closer from "../Closer";
import OpinionBox from "./OpinionBox";
import { Rating } from "@mui/material";

function AllOpinionsModal({ isModalOpen, setIsModalOpen }: I_IsModalOpen) {
  return (
    <div
      className={`${
        isModalOpen ? "top-0 " : "top-[100vh] "
      } fixed left-0 duration-300 right-0 w-full h-screen text-black/70 bg-white z-10`}
    >
      <div className="flex justify-between px-5 py-6 items-center ">
        <div className="flex items-end gap-3">
          <Closer
            setIsOpen={setIsModalOpen}
            icon={<ArrowForwardRoundedIcon />}
          />
          <div className="text-[17px] font-[dana-db]">
            <span className="font-[iransans] font-bold pe-1">1344</span>
            دیدگاه
          </div>
        </div>
        <div>
          <SwapVertRoundedIcon />
        </div>
      </div>
      <div className="overflow-y-auto px-4 max-h-[calc(100vh-4.8rem)]">
        <div className="my-4">
          <div className="price text-3xl me-1">
            4.5
            <span className="text-lg ps-1">
              <span className="font-[dana] font-medium me-0.5">از</span>5
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div dir="ltr" className="rotate-y-180" >
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
        <div className="mt-6">
          <OpinionBox isInModal />
          <OpinionBox isInModal />
          <OpinionBox isInModal />
          <OpinionBox isInModal />
        </div>
      </div>
      <div className="absolute left-5 bottom-4 text-[15px] text-white bg-(--prim) flex items-center gap-1 px-5 active:scale-90 py-3 rounded-full">
        <div className="translate-y-0.5">ثبت دیدگاه</div>
        <div>
          <MapsUgcRoundedIcon />
        </div>
      </div>
    </div>
  );
}

export default AllOpinionsModal;
