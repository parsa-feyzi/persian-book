import { ComponentProps } from "react";
import Sidebar from "../Sidebar";

type T_Button = ComponentProps<"button">;

function Button({ children, onClick, className }: T_Button) {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded-full bg-(--seco)/3 hover:bg-(--seco)/10 grid place-content-center cursor-pointer active:scale-95`}
      >
      {children}
    </button>
  );
}

export default Button;
