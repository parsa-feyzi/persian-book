import { ReactNode } from "react";

interface I_Props {
  title: string;
  children: ReactNode;
  leftButton?: ReactNode;
  htmlId?: string;
}

function ContentBox({ title, children, leftButton, htmlId }: I_Props) {
  return (
    <div id={htmlId} className="relative p-6 py-8 overflow-hidden rounded-xl xl:mt-8 mt-6 bg-white">
      <div className="flex justify-between items-center mb-8">
        <div className="font-[dana-b] text-xl">{title}</div>
        <div>{leftButton}</div>
      </div>
      <div>{children}</div>
      <div className="absolute w-4 h-9 bg-(--prim) -right-2.5 top-7 rounded-full"></div>
    </div>
  );
}

export default ContentBox;
