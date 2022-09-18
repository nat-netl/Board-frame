import React from "react";
import s from "./basket.module.scss"
import m from "./../../assets/styles/main.module.scss"
import BasketList from "../../components/basket/basketList/BasketList";
import BasketTotalAmount from "../../components/basket/basketTotalAmount/BasketTotalAmount";
import { useAppSelector } from "../../hooks/redux";
import { BasketState } from "../../redux/slices/basket";

const Basket = () => {
  const { basket, isLoading, error } = useAppSelector<BasketState>(state => state.basket)

  return (
    <div className={s.wrapper}>
      <div className={m.container}>
        <div className={s.basket}>
          {
            basket.length > 0 ?
              <>
                <BasketList basket={basket} isLoading={isLoading} error={error} />
                <BasketTotalAmount />
              </>
              :
              <h2 className={m.error}>Корзина пуста</h2>
          }
        </div>
      </div>
    </div>
  );
};

export default Basket;
