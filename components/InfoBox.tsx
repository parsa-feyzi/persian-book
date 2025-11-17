import { ReactNode } from "react";

interface I_Props { label: string, infos: ReactNode }

function InfoBox({ label, infos }: I_Props) {
  return (
    <div className="md:text-base text-sm">
      <div className="font-[dana-b] sm:block hidden leading-4 text-black/69">{label}:</div>
      <div className="text-(--seco)/85 ms-2">{infos}</div>
    </div>
  );
}

export default InfoBox;
