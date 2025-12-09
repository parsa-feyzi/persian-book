import { ReactNode } from "react";

interface I_Props { children: ReactNode; styles?: string }

function Container({children, styles}: I_Props) {
  return (
    <div className={`${styles} container lg:px-[2vw] md:px-[4vw] px-[6vw] mx-auto`}>{children}</div>
  )
}

export default Container