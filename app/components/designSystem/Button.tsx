import { ComponentProps } from "react";

type T_Button = ComponentProps<"button">;

function Button({ children, style, onClick, className }: T_Button) {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded-full bg-(--seco)/3 hover:bg-(--seco)/10 grid place-content-center cursor-pointer active:scale-95`}
      style={style}
      >
      {children}
    </button>
  );
}

export default Button;
