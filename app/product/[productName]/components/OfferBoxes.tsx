import SecoProductsBoxSwiper from "@/components/SecoProductsBoxSwiper";

function OfferBoxes() {
  return (
    <>
      <div className="mt-10">
        <SecoProductsBoxSwiper
          title={
            <span className="mb-8 font-[dana-b] lg:text-xl sm:text-lg relative after:w-[calc(100%-2rem)] after:h-0.5 after:rounded-full after:bg-(--prim) after:absolute after:-bottom-2 after:right-0">
              کتاب‌های مشابه
            </span>
          }
          linkToAll="/"
          maxSlide={6}
          bgColor="#014121"
          textColor="#000101"
          bgOpacity={3}
        />
      </div>
      <div className="mt-10">
        <SecoProductsBoxSwiper
          title={
            <span className="mb-8 font-[dana-b] lg:text-xl sm:text-lg relative after:w-[calc(100%-2rem)] after:h-0.5 after:rounded-full after:bg-(--prim) after:absolute after:-bottom-2 after:right-0">
              پیشنهاد خرید
            </span>
          }
          linkToAll="/"
          maxSlide={6}
          bgColor="#014121"
          textColor="#000101"
          bgOpacity={3}
        />
      </div>
    </>
  );
}

export default OfferBoxes;
