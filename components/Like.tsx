"use client";
import { useState } from "react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

function Like() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div onClick={() => setIsLiked(!isLiked)} className="active:scale-95 cursor-pointer">
      {isLiked ? (
        <span className="text-red-400">
        <FavoriteRoundedIcon sx={{ fontSize: 21 }} />
      </span>
      ) : (
        <span>
          <FavoriteBorderRoundedIcon sx={{ fontSize: 21 }} />
        </span>
      )}
    </div>
  );
}

export default Like;
