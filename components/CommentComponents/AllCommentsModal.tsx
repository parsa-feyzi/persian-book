import { I_IsModalOpen } from "@/types/types";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Closer from "../Closer";
import { ReactNode } from "react";

type T_Props = {
  title: string;
  children: ReactNode;
  itemsLenght: number;
  actionButton?: ReactNode;
  headerContent?: ReactNode;
} & I_IsModalOpen;

function AllCommentsModal({ title, children, itemsLenght, actionButton, headerContent, isModalOpen, setIsModalOpen }: T_Props) {
  return (
    <div
      className={`${
        isModalOpen ? "top-0 " : "top-[100vh] "
      } md:hidden block fixed left-0 duration-300 right-0 w-full h-screen text-black/70 bg-white z-10`}
    >
      <div className="flex justify-between px-5 py-6 items-center ">
        <div className="flex items-end gap-3">
          <Closer
            setIsOpen={setIsModalOpen}
            icon={<ArrowForwardRoundedIcon />}
          />
          <div className="text-[17px] font-[dana-db]">
            <span className="font-[iransans] font-bold pe-1">
              {itemsLenght}
            </span>
            {title}
          </div>
        </div>
        <div>
          <SwapVertRoundedIcon />
        </div>
      </div>
      <div className="overflow-y-auto px-4 max-h-[calc(100vh-4.8rem)] pb-16">
        {headerContent}
        <div className="mt-6">{children}</div>
      </div>
      {actionButton}
    </div>
  );
}

export default AllCommentsModal;
