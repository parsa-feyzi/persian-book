"use client";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useState } from "react";
import Closer from "./Closer";
import ShareMediaOptions from "./ShareMediaOptions";
import {
  ContentCopyRounded,
  DoneOutlineRounded,
  Instagram,
  MailOutlineRounded,
  MoreHorizRounded,
  Telegram,
  WhatsApp,
} from "@mui/icons-material";
import Cover from "./Cover";
import { useParams } from "next/navigation";

function Share() {
  const [isShowShareModal, setIsShowShareModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { productName } = useParams();

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `http://localhost:3000/product/${productName?.toString()}`
    );
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 4000);
  };

  return (
    <>
      <div
        onClick={() => setIsShowShareModal(true)}
        className="cursor-pointer active:scale-95"
      >
        <ShareOutlinedIcon sx={{ fontSize: 19 }} className="rotate-180" />
      </div>
      {/* modal */}
      <div className="z-10">
        <Cover
          isModalOpen={isShowShareModal}
          setIsModalOpen={setIsShowShareModal}
          z={10}
        />
        <div
          className={`${
            isShowShareModal ? "bottom-0" : "sm:hidden -bottom-[50vh]"
          } sm:duration-initial duration-300 fixed sm:top-1/2 sm:bottom-auto sm:-translate-1/2 sm:left-1/2 left-0 sm:w-120 w-full z-20 bg-white sm:rounded-xl rounded-t-3xl p-4`}
        >
          <div className="flex justify-between items-center border-b-2 pb-4 mb-4 border-(--seco)/10">
            <div className="font-[dana-b] pt-1">اشتراک‌گذاری</div>
            <Closer setIsOpen={setIsShowShareModal} />
          </div>
          <div>
            <div className="text-sm font-[dana-db] text-black/70">
              این کالا را با دوستان خود به اشتراک بگذارید!
            </div>
            <div
              style={{ scrollbarWidth: "none" }}
              className="flex flex-row-reverse whitespace-nowrap justify-between overflow-x-auto overflow-y-hidden sm:mt-8 mt-6 px-4 items-center w-full max-w-full gap-6"
            >
              {/* instagram */}
              <ShareMediaOptions
                title="اینستاگرام"
                link="/"
                icon={<Instagram sx={{ fontSize: 32 }} />}
                color="#ff3040a0"
              />
              {/* telegram */}
              <ShareMediaOptions
                title="تلگرام"
                link="/"
                icon={<Telegram sx={{ fontSize: 32 }} />}
                color="#00a9dc"
              />
              {/* whatsApp */}
              <ShareMediaOptions
                title="واتساپ"
                link="/"
                icon={<WhatsApp sx={{ fontSize: 32 }} />}
                color="#00da52"
              />
              {/* email */}
              <ShareMediaOptions
                title="ایمیل"
                link="/"
                icon={<MailOutlineRounded sx={{ fontSize: 32 }} />}
                color="#505555"
              />
              {/* copy */}
              <div
                onClick={handleCopy}
                className="flex flex-col justify-center items-center gap-1.5 active:scale-95 cursor-pointer"
              >
                <div className="grid place-content-center size-12 p-1 rounded-xl hover:bg-black/3 text-black/70 border border-black/25">
                  {isCopied ? (
                    <DoneOutlineRounded sx={{ fontSize: 30 }} />
                  ) : (
                    <ContentCopyRounded sx={{ fontSize: 30 }} />
                  )}
                </div>
                <div className="font-[dana-db] text-xs text-center">
                  {isCopied ? "کپی شد!" : "کپی لینک"}
                </div>
              </div>
              {/* more */}
              <div className="flex flex-col justify-center items-center gap-1.5 active:scale-95 cursor-pointer">
                <div className="grid place-content-center size-12 p-1 rounded-xl hover:bg-black/3 text-black/70 border border-black/25">
                  <MoreHorizRounded sx={{ fontSize: 30 }} />
                </div>
                <div className="font-[dana-db] text-xs text-center">بیشتر</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Share;
