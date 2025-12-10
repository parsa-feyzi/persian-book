import { DeleteSweepOutlined } from "@mui/icons-material";
import DrawerBox from "./DrawerBox";

function FilterBox() {
  return (
    <div className="sticky pry_border top-26 rounded-lg bg-white/70 px-4 py-6">
      <div className="flex items-center justify-between pb-4">
        <div className="text-lg font-[dana-db] text-black/70">فیلترها</div>
        <div className="text-xs text-red-600 flex gap-0.5 cursor-pointer active:scale-95 items-center">
          حذف فیلترها
          <DeleteSweepOutlined className="mb-1" sx={{ fontSize: 18 }} />
        </div>
      </div>
      <div>
        <DrawerBox title="محدوده قیمت">
          <div>سلام</div>
        </DrawerBox>
        <DrawerBox title="ناشر">
          <div>سلام الیک</div>
        </DrawerBox>
        <DrawerBox title="موضوع">
          <div>کاهی</div>
        </DrawerBox>
        <DrawerBox title="نوع جلد">
          <div>کاهی</div>
        </DrawerBox>
        <DrawerBox title="نوع کاغذ">
          <div>کاهی</div>
        </DrawerBox>
        <DrawerBox title="قطع">
          <div>کاهی</div>
        </DrawerBox>
        <DrawerBox title="زبان نوشتار">
          <div>10</div>
        </DrawerBox>
        <DrawerBox title="فقط کالا های موجود در انبار" isLatestItem>
          <div>10</div>
        </DrawerBox>
      </div>
    </div>
  );
}

export default FilterBox;
