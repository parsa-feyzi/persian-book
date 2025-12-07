import { ReactNode } from "react";
import Link from "next/link";

interface I_Props {
  title: string;
  icon: ReactNode;
  color: string;
  link: string;
}

function ShareMediaOptions({ title, icon, color, link }: I_Props) {
  return (
    <Link
      href={link}
      className="flex flex-col justify-center gap-1.5 active:scale-95"
    >
      <div
        style={{ backgroundColor: color }}
        className="grid place-content-center size-12 p-1 rounded-xl text-white"
      >
        {icon}
      </div>
      <div className="font-[dana-db] text-xs text-center">{title}</div>
    </Link>
  );
}

export default ShareMediaOptions;
