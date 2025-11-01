import Link from "next/link";

interface I_Props {
  logo: React.ReactNode;
  title: string;
  href: string;
}

function CategoryBox({ logo, title, href }: I_Props) {
  return (
    <Link
      href={`category/${href}`}
      className="flex flex-col justify-center items-center gap-1"
    >
      <div className="lg:size-16 sm:size-14 size-12 rounded-full border-2 border-(--prim)/20 bg-(--prim)/5 grid place-content-center">
        <div className="lg:size-7 size-6 text-(--prim)">{logo}</div>
      </div>
      <div className="lg:text-sm sm:text-[13px] text-xs font-[dana-db]">{title}</div>
    </Link>
  );
}

export default CategoryBox;
