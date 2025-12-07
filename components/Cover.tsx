import { I_IsModalOpen } from "@/types/types";

interface I_Props extends I_IsModalOpen {
  z: number;
  isBlur?: boolean;
}

function Cover({ isModalOpen, setIsModalOpen, z, isBlur }: I_Props) {
  return (
    <div
      onClick={() => setIsModalOpen(false)}
      style={{ zIndex: z }}
      className={`
        ${isModalOpen ? "" : "hidden"} 
        ${isBlur ? "backdrop-blur-xs" : ""} 
        fixed top-0 left-0 right-0 w-screen h-screen bg-black/25
      `}
    ></div>
  );
}

export default Cover;
