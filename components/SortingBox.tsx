import { I_SortingTab } from "@/types/types";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";

interface I_Props {
  tabs: I_SortingTab[];
  itemsNumber: number;
  label: string;
}

function SortingBox({ tabs, itemsNumber, label }: I_Props) {
  return (
    <div className="flex items-center justify-between md:mb-4 mb-2 bg-white">
      <div className="md:flex hidden items-center gap-4">
        <div className="flex items-center gap-1 text-black/70">
          <div>
            <SwapVertRoundedIcon />
          </div>
          <div>مرتب سازی:</div>
        </div>
        <div className="flex gap-4 items-center text-sm">
          {tabs.map((tab) => (
            <div
              key={tab.href}
              className={`${
                tab.isActive ? "text-(--prim)" : "text-(--seco)/70"
              } cursor-pointer active:scale-95`}
            >
              {tab.title}
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden block active:scale-95 cursor-pointer">
        <div className="flex items-center gap-1 text-black/70">
          <div>
            <SwapVertRoundedIcon sx={{ fontSize: 20 }} />
          </div>
          <div className="text-sm">{tabs[tabs.findIndex(item => item.isActive)].title}</div>
        </div>
      </div>
      <div className="text-(--seco)/70 font-[dana-db] lg:text-sm text-xs">
        <span className="price pe-1 text-(--seco)/70!">{itemsNumber}</span>
        {label}
      </div>
    </div>
  );
}

export default SortingBox;
