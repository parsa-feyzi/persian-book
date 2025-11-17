interface I_Props {
  title: string;
  value: string;
  className?: string
}

function InfoBox({ title, value, className }: I_Props) {
  return (
    <div className={`${className} flex flex-col justify-center mt-2 items-center`}>
      <div className="text-(--seco) text-sm leading-4">{title}</div>
      <div className="font-[dana-db] text-(--prim) text-lg">{value}</div>
    </div>
  );
}

export default InfoBox;
