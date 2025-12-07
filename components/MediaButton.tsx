import { ReactNode } from "react";

import Link from "next/link";


interface I_Props {
  icon: ReactNode;
  href: string;
}

function MediaButton({ icon, href }: I_Props) {
  return (
    <Link
      href={href}
      className="grid duration-150 place-content-center lg:size-13 lg:p-3 sm:size-11 sm:p-2 size-9 p-2  rounded-full bg-(--prim)/3 border-2 border-(--prim)/25 text-(--prim)/85 hover:bg-(--prim) hover:text-white active:scale-95"
    >
      {icon}
    </Link>
  );
}

export default MediaButton;
