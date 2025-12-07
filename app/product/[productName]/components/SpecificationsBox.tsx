import { Verified } from "@mui/icons-material";

import Button from "@/components/designSystem/Button";
import ContentBox from "@/components/ContentBox";
import DetailsBox from "./DetailsBox";


function SpecificationsBox() {
  return (
    <ContentBox
      title="مشخصات"
      leftButton={
        <Button className="text-amber-600/70 flex! gap-1.5 items-center bg-white/0! hover:bg-white/0! me-1">
          <div className="sm:block hidden text-sm mt-1">تضمین کیفیت کالا</div>
          <span className="sm:block hidden">
            <Verified sx={{ fontSize: 28 }} />
          </span>
          <span className="sm:hidden block">
            <Verified sx={{ fontSize: 24 }} />
          </span>
        </Button>
      }
    >
      <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-2 col-span-12">
        <DetailsBox
          title="سری چاپ"
          value={<span className="text-black! price">{22}</span>}
        />
        <DetailsBox
          title="نوع کاغذ"
          value={<span className="font-[dana-db]">کاهی</span>}
        />
        <DetailsBox
          title="نوع جلد"
          value={<span className="font-[dana-db]">پلاستیکی</span>}
        />
        <DetailsBox
          title="وزن"
          value={
            <div className="text-black! price">
              340
              <span className="font-[dana-l] text-sm ps-1">گرم</span>
            </div>
          }
        />
        <DetailsBox
          title="تعداد صفحه"
          value={<span className="text-black! price">{362}</span>}
        />
        <DetailsBox
          title="تاریخ انتشار"
          value={<div className="text-black! price">1401/10/18</div>}
        />
      </div>
    </ContentBox>
  );
}

export default SpecificationsBox;
