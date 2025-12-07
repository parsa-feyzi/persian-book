import { I_IsModalOpen } from "@/types/types";

interface I_Props extends Pick<I_IsModalOpen, "setIsModalOpen"> {
  z: number;
  isBlur?: boolean;
}

function Cover({ z, isBlur, setIsModalOpen }: I_Props) {
  return (
    <div
      onClick={() => setIsModalOpen(false)}
      style={{ zIndex: z }}
      className={`${
        isBlur ? "backdrop-blur-xs" : ""
      } page_cover fixed top-0 left-0 right-0 w-screen h-screen bg-black/25`}
    ></div>
  );
}

export default Cover;
