import { ReactNode } from "react";

interface I_Props {
  title: string;
  children: ReactNode;
  leftButton?: ReactNode;
}

function ContentBox({ title, children, leftButton }: I_Props) {
  return (
    <div className="relative p-6 py-8 overflow-hidden rounded-xl mt-8 bg-white">
      <div className="flex justify-between items-center mb-6">
        <div className="font-[dana-b] text-lg">{title}</div>
        <div>{leftButton}</div>
      </div>
      <div>{children}</div>
      <div className="absolute w-4 h-9 bg-(--prim) -right-2.5 top-6.5 rounded-full"></div>
    </div>
  );
}

export default ContentBox;
