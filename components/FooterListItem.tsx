import { I_ListItem } from "@/types/types"
import Link from "next/link"

function FooterListItem({ title, href }: I_ListItem) {
  return (
    <Link className="footer_list_item hover:text-(--prim) active:scale-95 text-sm relative overflow-hidden sm:text-base text-(--seco) duration-300" href={href} >
        {title}
        <div className="footer_list_item_b_border sm:block hidden absolute bottom-0 -right-full w-full h-0.5 bg-(--prim) rounded-e-full duration-300"></div>
    </Link>
  )
}

export default FooterListItem