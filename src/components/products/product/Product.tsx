import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { addedToBasket, addToBasket } from "../../../redux/slices/basket";
import { IProduct } from "../../../types/card";
import s from "./product.module.scss";

const Product: FC<IProduct> = ({
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

  // dispatch(addedToBasket({ id: id }));

  return (
    <a href="/#" className={s.product}>
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

      <button
        onClick={() =>
          dispatch(
            addToBasket([
              {
                id: id,
                name: name,
                image: image,
                price: price,
                description: description,
                instock: instock,
              },
            ])
          )
        }
      >
        Купить
      </button>
    </a>
  );
};

export default Product;
