'use client'

import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";

function Thumbs() {
  return (
    <div className="flex gap-4 text-(--seco)/70">
      <div className="flex items-center cursor-pointer">
        <span className="price text-(--seco)/70! pe-1 text-sm!">69</span>
        <div className="active:scale-90">
          <ThumbDownOffAltOutlinedIcon
            sx={{ fontSize: 18 }}
            className="rotate-180"
          />
        </div>
      </div>
      <div className="flex items-center cursor-pointer">
        <span className="price text-(--seco)/70! pe-1 text-sm!">0</span>
        <div onClick={() => console.log("kkk")} className="active:scale-90">
          <ThumbDownOffAltOutlinedIcon
            sx={{ fontSize: 18 }}
            className="rotate-y-180"
          />
        </div>
      </div>
    </div>
  );
}

export default Thumbs;
