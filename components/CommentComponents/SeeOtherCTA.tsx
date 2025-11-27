import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

interface I_Props {
  action: () => void;
  label: string;
}

function SeeOtherCTA({ action, label }: I_Props) {
  return (
    <div
      onClick={action}
      className="lg:hidden flex justify-center text-sm mt-4 items-center gap-2 text-(--prim)"
    >
      <div>
        مشاهده <span className="price text-(--prim)!">1340</span> {label} دیگر
      </div>
      <div className="rotate-180">
        <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
      </div>
    </div>
  );
}

export default SeeOtherCTA;
