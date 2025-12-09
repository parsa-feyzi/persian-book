import { DeleteSweepOutlined } from "@mui/icons-material";
import DrawerBox from "./DrawerBox";

function FilterBox() {
  return (
    <div className="sticky bottom-0 rounded-lg bg-white px-4 py-6">
      <div className="flex items-center justify-between pb-4">
        <div className="text-lg font-[dana-db] text-black/70">فیلترها</div>
        <div className="text-xs text-red-700 flex gap-0.5 cursor-pointer active:scale-95 items-center">
          حذف فیلترها
          <DeleteSweepOutlined className="mb-1" sx={{ fontSize: 18 }} />
        </div>
      </div>
      <div>
        <DrawerBox title="برای مشاهده وحیدیان کلیک کنید">
          <div>کیر</div>
        </DrawerBox>
        <DrawerBox title="برای مشاهده درجزینی کلیک کنید">
          <div>کیر</div>
        </DrawerBox>
        <DrawerBox title="نوع کاغذ">
          <div>کیر</div>
        </DrawerBox>
        <DrawerBox title="محدوده قیمت" isLatestItem>
          <div>کیر</div>
        </DrawerBox>
      </div>
    </div>
  );
}

export default FilterBox;
