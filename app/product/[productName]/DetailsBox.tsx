import { ReactNode } from "react";

interface I_Props { title: string; value: ReactNode }

function DetailsBox({ title, value }: I_Props) {
  return (
    <div className="flex items-center rounded-2xl gap-2 p-4 bg-background">
      <div className="w-ful">
        <div className="text-(--seco) text-sm">{title}</div>
        <div className="w-full mt-1 ms-2 text-(--seco)/20">{value}</div>
      </div>
    </div>
  );
}

export default DetailsBox;
