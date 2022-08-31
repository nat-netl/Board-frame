import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { addToBasket } from "../../../redux/slices/basket";
import { ICard } from "../../../types/card";
import s from "./product.module.scss";

const Product: FC<ICard> = ({
  id,
  name,
  image,
  price,
  description,
  instock,
}) => {
  const { basket } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  console.log(basket);

  return (
    <a
      href="/#"
      className={s.product}
      onClick={() =>
        dispatch(
          addToBasket([{
            id: id,
            name: name,
            image: image,
            price: price,
            description: description,
            instock: instock,
          }])
        )
      }
    >
      <div className={instock ? s.product__instock : s.product__no__instock}>
        <span>{instock ? "В наличии" : "Нет в наличии"}</span>
      </div>

      <div className={s.product__image}>
        <img src={image} alt={name} />
      </div>

      <div className={s.product__info}>
        <div className={s.name}>
          <h2>{name}</h2>
        </div>

        <div className={s.price}>
          <span>{price} ₽</span>
        </div>
      </div>
    </a>
  );
};

export default Product;
