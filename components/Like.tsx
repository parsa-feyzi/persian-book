"use client";
import { useState } from "react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

function Like() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div onClick={() => setIsLiked(!isLiked)}>
      {isLiked ? (
        <span className="text-red-400 cursor-pointer">
        <FavoriteRoundedIcon sx={{ fontSize: 21 }} />
      </span>
      ) : (
        <span className="cursor-pointer">
          <FavoriteBorderRoundedIcon sx={{ fontSize: 21 }} />
        </span>
      )}
    </div>
  );
}

export default Like;
