import React from "react";
import s from "./instock.module.scss";

interface IInstockProps {
  instock: boolean | any;
}

const Instock = ({ instock }: IInstockProps) => {
  return (
    <div className={instock ? s.product__instock : s.product__no__instock}>
      <span>{instock ? "В наличии" : "Нет в наличии"}</span>
    </div>
  );
};

export default Instock;
