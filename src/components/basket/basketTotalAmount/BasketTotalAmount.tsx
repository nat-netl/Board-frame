import React, { FC } from "react";
import { priceFormatter } from "../../../helpers/formatter/priceFormatter";
import { prettifyPrice } from "../../../helpers/prettify/prettifyPrice";
import { useAppDispatch } from "../../../hooks/redux";
import {
  clearBasket,
  getTotalQuantityItemsBasket,
} from "../../../redux/slices/basket";
import { BasketState } from "../../../types/basket";
import BuyBlueButton from "../../ui/buttons/buyBlueButton/BuyBlueButton";
import s from "./basketTotalAmount.module.scss";

const BasketTotalAmount: FC<BasketState> = ({ basket }) => {
  const totalPrice = getTotalQuantityItemsBasket(basket);
  const dispatch = useAppDispatch();
  
  const onClickBuyProducts = () => {
    if (window.confirm("Вы действительно хотите купить перечисленные товары?")) {
      return dispatch(clearBasket());
    }
  };

  return (
    <div className={s.total}>
      <div className={s.total__amount}>
        <span className={s.total__amount__text}>Итого</span>
        <span>{priceFormatter("RUB", prettifyPrice(totalPrice.cost))}</span>
      </div>
      <BuyBlueButton onClick={onClickBuyProducts}>Купить</BuyBlueButton>
    </div>
  );
};

export default BasketTotalAmount;
