import { ReactNode } from "react";
import Closer from "../Closer";
import { I_IsModalOpen } from "@/types/types";
import Button from "../designSystem/Button";

type T_Props = { question: string; children: ReactNode } & I_IsModalOpen;

function QuestionBoxModal({ question, children, isModalOpen, setIsModalOpen }: T_Props) {
  return (
    <div
      className={`${
        isModalOpen ? "top-0 " : "top-[100vh] "
      } fixed left-0 duration-300 right-0 w-full h-screen bg-white z-10`}
    >
      <div className="flex px-4 justify-between py-4 border-b border-(--seco)/20 items-center">
        جزییات پرسش
        <Closer setIsOpen={setIsModalOpen} />
      </div>
      <div className="overflow-y-auto! px-4 max-h-[calc(100vh-8rem)]! py-8">
        <div className="font-[dana-db] mb-4">{question}</div>
        <div>{children}</div>
      </div>
      <div className="absolute z-1 border-t border-(--seco)/20 bg-white bottom-0 left-0 w-full p-4">
        <Button btnType="primary" size="lg" className="w-full! py-3.5!">
          ثبت پاسخ
        </Button>
      </div>
    </div>
  );
}

export default QuestionBoxModal;
