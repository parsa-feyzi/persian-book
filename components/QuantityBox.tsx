"use client"
import { useState } from "react";

import { AddRounded, DeleteOutlineRounded, MinimizeRounded } from "@mui/icons-material";

interface I_Props { initialCount: number }

function QuantityBox({ initialCount }: I_Props) {
  const [count, setCount] = useState(initialCount);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleRemove = () => setCount(count - 1);

  return (
    <div className="flex items-center justify-between w-20 p-1  rounded-lg text-(--prim) pry_border">
      <div onClick={handleIncrease} className="cursor-pointer active:scale-90">
        <AddRounded sx={{ fontSize: 20 }} />
      </div>
      <div className="font-[iransans] font-bold">{count}</div>
      {count === 1 ? (
        <div onClick={handleRemove} className="cursor-pointer active:scale-90">
          <DeleteOutlineRounded sx={{ fontSize: 17 }} />
        </div>
      ) : (
        <div onClick={handleDecrease} className="cursor-pointer active:scale-90">
          <MinimizeRounded sx={{ fontSize: 20 }} className="-translate-y-1.5" />
        </div>
      )}
    </div>
  );
}
export default QuantityBox;
