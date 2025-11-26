import { T_Size } from "@/types/types";
import Image from "next/image";

interface I_Props {
  name: string;
  role: "خریدار" | "ادمین";
  image?: string;
  size?: T_Size
}

function ProfileComment({ name, role, image, size="md" }: I_Props) {
  return (
      <div className="flex items-center gap-3">
        <div className={`${size === "md" ? "lg:size-10 size-8" : size === "sm" ? "lg:size-8 size-7" : ""} relative rounded-full shrink-0 mt-1 grow-0`}>
          <Image
            fill
            className="inline-block rounded-full"
            src={`/images/${image || "personeImage.png"}`}
            alt=""
            style={{ objectFit: "cover" }}
          />
        </div>
          <div className="flex items-center mt-2">
            <p className={`${size === "md" ? "lg:text-sm text-[13px] font-[dana-b]" : size === "sm" ? "lg:text-[13px] text-xs font-[dana-db]" : ""} text-black/70`}>{name}</p>
            <div className="flex">
              <div className="dot"></div>
            </div>
            <div
              className="inline-flex items-center border-none pr-0 px-2 "
              style={{
                backgroundColor: "transparent",
                color: "var(--color-hint-text-success)",
                borderColor: "var(--color-hint-text-success)",
              }}
            >
              <p className={`${role === "خریدار" ? "text-(--prim)" : "text-amber-600"} ${size === "md" ? "lg:text-xs text-[11px]" : size === "sm" ? "lg:text-[11px] text-[10px]" : ""} inline-block`}>{role}</p>
            </div>
          </div>
      </div>
  );
}

export default ProfileComment;
