"use client";
import PriceBox from "@/components/PriceBox";
import Button from "@/components/designSystem/Button";

function CartPaymentsBox() {
  return (
    <div className="sticky top-29 flex flex-col justify-between borde border-(--seco)/10 bg-white/70 pry_border rounded-xl p-5">
      <div>
        <PriceBox
          title={
            <span>
              مبلغ کل
              <span className="text-xs ms-1">
                (<span className="font-[iransans] font-bold">10</span> کتاب)
              </span>
            </span>
          }
          value={(250000).toLocaleString()}
          isPrice
        />
        <PriceBox title="سود شما" value={(30000).toLocaleString()} isProfit />
        <div className="mt-8"></div>
        <PriceBox
          title="موجودی کیف‌ پول"
          value={(250000).toLocaleString()}
          isPrice
          size="sm"
        />
      </div>
      <div className="xl:mt-2 mt-1 pt-3 border-t-2 border-black/5">
        <PriceBox
          title="مجموع"
          value={(250000).toLocaleString()}
          isPrice
          size="lg"
        />
        <Button btnType="primary" size="lg" className="w-full! mt-2">
          تایید و تکمیل سفارش
        </Button>
      </div>
    </div>
  );
}

export default CartPaymentsBox;
