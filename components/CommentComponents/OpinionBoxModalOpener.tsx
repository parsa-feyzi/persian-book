"use client";
import { ReactNode, useState } from "react";
import OpinionBoxModal from "./OpinionBoxModal";

function OpinionBoxModalOpener({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
        <div
          onClick={() => setIsModalOpen(true)}
          className="lg:hidden block line-clamp-2! cursor-pointer"
        >
          {children}
        </div>
        <OpinionBoxModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          {children}
        </OpinionBoxModal>
    </>
  );
}

export default OpinionBoxModalOpener;
