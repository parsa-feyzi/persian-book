import { ReactNode } from "react";

interface I_Props { title: string; value: ReactNode }

function DetailsBox({ title, value }: I_Props) {
  return (
    <div className="flex items-center xl:justify-start justify-center rounded-2xl gap-2 md:p-4 md:py-4 sm:p-3 p-2 py-3 pry_border bg-background">
      <div className="w-ful">
        <div className="text-(--seco) xl:text-right text-center sm:text-sm text-xs line-clamp-1">{title}</div>
        <div className="w-full sm:mt-1 mt-1.5 xl:ms-2 ms-0 xl:text-right text-center sm:text-base text-sm">{value}</div>
      </div>
    </div>
  );
}

export default DetailsBox;
