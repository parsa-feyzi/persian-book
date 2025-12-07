import Image from "next/image";

function ProductImagesBoxInMobail({ src }: { src: string }) {
  return (
    <div className="lg:hidden fixed -z-1 left-0 right-0 w-full py-8 bg-(--base) flex justify-center">
      <div className="relative h-60 w-43">
        <Image
          fill
          className="my-auto w-auto object-cover rounded-2xl"
          src={`/images/${src}`}
          alt=""
        />
      </div>
    </div>
  );
}

export default ProductImagesBoxInMobail;
