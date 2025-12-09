import { T_Size } from "@/types/types";
import Image from "next/image";

interface I_Props {
  name: string;
  role: "خریدار" | "ادمین";
  image?: string;
  size?: T_Size;
}

function ProfileComment({ name, role, image, size = "md" }: I_Props) {
  const lgTopSizes = size == "lg" ? 48 : size == "md" ? 40 : size == "sm" ? 32 : 0;
  const lgLowSizes = size == "lg" ? 40 : size == "md" ? 32 : size == "sm" ? 28 : 0;

  return (
    <div className="flex items-center gap-3">
      <div className="lg:block hidden">
        <Image
          width={lgTopSizes}
          height={lgTopSizes}
          className="inline-block object-cover!"
          src={`/images/${image || "personeImage.png"}`}
          alt=""
        />
      </div>
      <div className="lg:hidden block">
        <Image
          width={lgLowSizes}
          height={lgLowSizes}
          className="inline-block object-cover!"
          src={`/images/${image || "personeImage.png"}`}
          alt=""
        />
      </div>
      <div className="flex items-center mt-2">
        <p
          className={`${
            size === "md"
              ? "lg:text-sm text-[13px] font-[dana-b]"
              : size === "sm"
              ? "lg:text-[13px] text-xs font-[dana-db]"
              : ""
          } text-black/70`}
        >
          {name}
        </p>
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
          <p
            className={`${
              role === "خریدار" ? "text-(--prim)" : "text-amber-600"
            } ${
              size === "md"
                ? "lg:text-xs text-[11px]"
                : size === "sm"
                ? "lg:text-[11px] text-[10px]"
                : ""
            } inline-block`}
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileComment;
