import Button from "@/components/designSystem/Button";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

interface Props { lable: string, href: string, number: number, className?: string }

function LinkToContent({ lable, href, number, className }: Props) {
  return (
    <a href={`#${href}`}>
      <Button className={`${className} pry_border flex! items-center sm:text-[13px] text-[11px] font-[dana-db] pb-0.5 pt-1 px-2 bg-white hover:bg-white/70 text-(--seco)`}>
        <span className="price text-(--seco)! mx-1 mb-px">{number < 1000 ? number : "+999"}</span>
        <span>{lable}</span>
        <span className="mb-0.5 sm:block hidden">
          <KeyboardArrowLeftRounded fontSize="small" />
        </span>
        <span className="mb-0.5 block sm:hidden">
          <KeyboardArrowLeftRounded sx={{ fontSize: 17 }} />
        </span>
      </Button>
    </a>
  );
}

export default LinkToContent;
