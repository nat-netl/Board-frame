import React from "react";
import s from "./basket.module.scss"
import m from "./../../assets/styles/main.module.scss"
import BasketList from "../../components/basket/basketList/BasketList";

const Basket = () => {
  return (
    <div className={s.wrapper}>
      <div className={m.container}>
        <div className={s.basket}>
          <BasketList />
        </div>
      </div>
    </div>
  );
};

export default Basket;
