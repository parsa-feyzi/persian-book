import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";

import PriceBox from "@/components/PriceBox";
import Button from "./designSystem/Button";


function PaymentsBox() {
  return (
    <div className="sticky top-29 flex flex-col justify-between borde border-(--seco)/10 bg-white rounded-xl p-5">
      <div>
        <PriceBox title="قیمت" value={(250000).toLocaleString()} isPrice />
        <PriceBox title="سود شما" value={(30000).toLocaleString()} isPrice />
        <PriceBox title="تخفیف" value={(20).toLocaleString()} isDiscount />
      </div>
      <div className="xl:mt-8 mt-4">
        <PriceBox
          title="موجودی کیف‌ پول"
          value={(250000).toLocaleString()}
          isPrice
          size="sm"
        />
        <div className="mb-2"></div>
        <Button btnType="primary" size="lg" className="w-full!" >
          افزودن به سبد خرید
        </Button>
        <div className="flex items-end gap-1 mt-2.5 text-(--prim)/80 justify-center">
          <GppGoodOutlinedIcon sx={{ fontSize: 21 }} />
          <div className="xl:text-[13px] text-xs xl:translate-y-0.5">گارانتی اصالت و سلامت فیزیکی کالا</div>
        </div>
      </div>
    </div>
  );
}

export default PaymentsBox;
