import Image from "next/image";

import Like from "@/components/Like";
import Share from "@/components/Share";


function ProductImagesBoxInDesktop({ src }: { src: string }) {
  return (
    <div className="relative lg:col-span-4 lg:block hidden">
      <div className="lg:flex justify-center lg:p-6 rounded-lg">
        <div className="xl:w-44 w-36 xl:h-60 h-52 relative">
          <Image
            fill
            className="my-auto relative w-auto object-cover rounded-2xl shadow-xl/1"
            src={`/images/${src}`}
            alt=""
          />
        </div>
      </div>
      <div className="lg:flex hidden mt-3 items-center gap-2 text-black/70">
        <div className="absolute right-3 top-10">
          <Share />
        </div>
        <div className="absolute right-3 top-3">
          <Like />
        </div>
      </div>
    </div>
  );
}

export default ProductImagesBoxInDesktop;
