import { I_ListItem } from "@/public/types/types"
import Link from "next/link"

function FooterListItem({ title, href }: I_ListItem) {
  return (
    <Link className="text-sm sm:text-base text-(--seco)" href={href} >
        {title}
    </Link>
  )
}

export default FooterListItem