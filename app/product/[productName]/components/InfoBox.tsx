interface I_Props {
  title: string;
  value: string;
  className?: string
}

function InfoBox({ title, value, className }: I_Props) {
  return (
    <div className={`${className} flex flex-col justify-center mt-2 items-center`}>
      <div className="text-(--seco) md:text-sm text-xs leading-4">{title}</div>
      <div className="font-[dana-db] lg:text-(--prim) md:text-lg sm:text-base text-sm">{value}</div>
    </div>
  );
}

export default InfoBox;
