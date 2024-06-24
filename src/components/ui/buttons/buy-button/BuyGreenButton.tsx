import React, { PropsWithChildren } from "react";
import s from "./buyGreenButton.module.scss";

interface IPropsBtn {
  children?: any;
  inBasket?: boolean;
  inStock?: boolean;
  props?: PropsWithChildren;
  onClick?: React.MouseEventHandler;
}

const BuyGreenButton = ({
  children,
  inBasket,
  inStock,
  onClick,
  ...props
}: PropsWithChildren<IPropsBtn>) => {
  return (
    <button
      className={
        inBasket
          ? s.bought__button
          : s.buy__button && inStock
          ? s.buy__button
          : s.bought__button
      }
      disabled={inBasket || !inStock}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BuyGreenButton;
