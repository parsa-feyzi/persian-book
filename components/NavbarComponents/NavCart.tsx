"use client";
import { Activity, useState } from "react";

import CartIcon from "../icons/CartIcon";
import Button from "../designSystem/Button";
import Cover from "../Cover";
import NavCartModal from "./NavCartModal";
import { redirect } from "next/navigation";

function NavCart() {
  const [isShowCartModal, setIsShowCartModal] = useState(false);

  const handleShowCart = () => {
    if(false){
      redirect("/cart")
    } else {
      setIsShowCartModal(!isShowCartModal)
    }
  }

  return (
    <div className={`${isShowCartModal ? "z-10" : ""} relative`}>
      <Button onClick={handleShowCart} className={`${isShowCartModal ? "bg-white/95" : ""} pry_border size-11 bg-(--seco)/2 backdrop-blur-xl`}>
        <div className="size-5">
          <CartIcon />
        </div>
      </Button>
      {/* modal */}
      <Activity mode={isShowCartModal ? "visible" : "hidden"}>
        <Cover setIsModalOpen={setIsShowCartModal} z={-1} />
        <NavCartModal />
      </Activity>
    </div>
  );
}

export default NavCart;
