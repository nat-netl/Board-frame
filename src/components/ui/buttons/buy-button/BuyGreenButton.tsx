import React, { PropsWithChildren } from "react";
import s from "./buyGreenButton.module.scss";

interface IPropsBtn {
  children?: any,
  inBasket?: boolean,
  props?: PropsWithChildren,
  onClick?: React.MouseEventHandler
}

function BuyGreenButton({ children, inBasket, onClick, ...props}: PropsWithChildren<IPropsBtn>) {
  console.log (inBasket)

  return (
    <button
      className={inBasket ? s.bought__button : s.buy__button}
      disabled={inBasket}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default BuyGreenButton;
