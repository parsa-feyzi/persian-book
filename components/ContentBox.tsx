import { ReactNode } from "react";

interface I_Props {
  title: string;
  children: ReactNode;
  leftButton?: ReactNode;
  htmlId?: string;
}

function ContentBox({ title, children, leftButton, htmlId }: I_Props) {
  return (
    <div id={htmlId} className="relative lg:px-6 lg:py-8 px-4 py-5 overflow-hidden rounded-xl xl:mt-8 mt-6 bg-white">
      <div className="flex justify-between items-center sm:mb-8 mb-5">
        <div className="font-[dana-b] lg:text-xl sm:text-lg">{title}</div>
        <div>{leftButton}</div>
      </div>
      <div>{children}</div>
      <div className="absolute w-4 lg:h-9 h-8 bg-(--prim) lg:-right-2.5 -right-[11px] lg:top-7 top-4.5 rounded-full"></div>
    </div>
  );
}

export default ContentBox;
