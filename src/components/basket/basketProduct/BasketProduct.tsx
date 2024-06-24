import React, { FC } from "react";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  decreaseStuffQuantity,
  inputStuffQuantity,
  removeFromBasket,
} from "../../../redux/slices/basket";
import { IProduct } from "../../../types/product";
import s from "./basketProduct.module.scss";

const BasketProduct: FC<IProduct> = ({
  id,
  name,
  image,
  price,
  instock,
  brand,
  amount,
}) => {
  const dispatch = useDispatch();
  const onDeleteItem = () => {
    dispatch(removeFromBasket({ id }));
  };

  const onDecreaseQuantity = () => {
    if (amount && amount > 1) {
      dispatch(
        decreaseStuffQuantity({
          id,
          name,
          image,
          price,
          instock,
          brand,
          amount,
        })
      );
    } else {
      dispatch(removeFromBasket(id));
    }
  };

  const onInputQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    amount = Number(e.target.value);
    dispatch(
      inputStuffQuantity({ id, name, image, price, instock, brand, amount })
    );
  };

  const onInsreaseQuantity = () => {
    dispatch(addToBasket({ id, name, image, price, instock, brand, amount }));
  };

  return (
    <tr className={s.basket__item}>
      <td className={s.item__image}>
        <img src={image} title={name} alt={name} />
      </td>
      <td className={s.item__name}>{name}</td>
      <td className={s.item__quantity}>
        <div className={s.quantity}>
          <button
            className={s.quantity__btn__plus}
            onClick={onDecreaseQuantity}
            type="button"
          >
            -
          </button>
          <input
            className={s.quantity__input}
            onChange={(e) => onInputQuantity(e)}
            value={amount}
            type="text"
            maxLength={4}
          />
          <button
            className={s.quantity__btn__minus}
            type="button"
            onClick={onInsreaseQuantity}
          >
            +
          </button>
        </div>
      </td>
      <td className={s.item__price}>
        {amount && amount ? price * amount : price} ₽
      </td>
      <td className={s.item__remove}>
        <button className={s.remove__btn} type="button" onClick={onDeleteItem}>
          ×
        </button>
      </td>
    </tr>
  );
};

export default BasketProduct;
