"use client";

import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";

import PriceBox from "@/components/PriceBox";
import Button from "@/components/designSystem/Button";

function ProductPaymentsBox() {
  return (
    <div className="sticky top-29 flex flex-col justify-between borde border-(--seco)/10 bg-white/70 pry_border rounded-xl p-5">
      <div>
        <PriceBox title="مبلغ" value={(250000).toLocaleString()} isPrice />
        <PriceBox
          title="سود شما"
          value={
            <span>
              <span className="text-xs me-1">
                (<span className="text-sm">{20}</span>%)
              </span>
              {(30000).toLocaleString()}
            </span>
          }
          isProfit
        />
        {/* <PriceBox title="تخفیف" value={(20).toLocaleString()} isDiscount /> */}
      </div>
      <div className="xl:mt-8 mt-4 border-t-2 border-black/5">
        <PriceBox
          title="موجودی کیف‌ پول"
          value={(250000).toLocaleString()}
          isPrice
          size="sm"
        />
        <Button btnType="primary" size="lg" className="w-full! mt-2">
          افزودن به سبد خرید
        </Button>
        <div className="flex items-end gap-1 mt-2.5 text-(--prim)/80 justify-center">
          <GppGoodOutlinedIcon sx={{ fontSize: 21 }} />
          <div className="xl:text-[13px] text-xs xl:translate-y-0.5">
            گارانتی اصالت و سلامت فیزیکی کالا
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPaymentsBox;
