import Link from "next/link"
import ArrowDownIcon from "./icons/ArrowDownIcon"
import { ReactNode } from "react";

interface I_Props { href: string, title: string; children: ReactNode }

function HomeSection({ href, title, children }: I_Props) {
  return (
    <section className="mt-22">
      <div className="flex justify-between items-center gap-4 flex-wrap mb-8">
        <div className="relative">
          <div className="sm:text-[22px] text-lg font-[dana-xb]">{title} <span className="text-(--seco)">پـرشین بـوکـــ</span></div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-6 w-[calc(100%-100px)] h-7 bg-linear-to-l from-(--prim)/10 -z-1">
              <div className="absolute top-0 -right-4 size-7 rotate-45 bg-background"></div>
          </div>
        </div>
        <Link href={href} className="text-(--seco) sm:w-auto w-full justify-end hover:text-(--prim) flex items-center gap-0.5">
          <div className="text-sm font-[dana-db]">همه کتاب‌ها</div>
          <div className="size-3.5 mb-0.5">
            <ArrowDownIcon styles={{ rotate: "90deg" }} />
          </div>
        </Link>
      </div>
      <div>
        {children}
      </div>
    </section>
  )
}

export default HomeSection