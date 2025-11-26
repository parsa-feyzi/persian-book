import { I_ListItem } from "@/types/types";
import FooterListItem from "./FooterListItem";

interface I_Props {
  title: string;
  listItems: I_ListItem[];
}

function FooterList({ title, listItems }: I_Props) {
  return (
    <div>
      <span className="inline-block sm:text-xl font-[dana-xb] mb-3 sm:mb-4 text-black/85">
        {title}
      </span>
      <div className="flex flex-col sm:items-start items-center gap-y-3 sm:gap-y-4 ">
        {listItems.map((item) => (
          <FooterListItem {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default FooterList;
