import React, { FC } from "react";
import { ICard } from "../../../types/card";
import s from "./product.module.scss";

const Product: FC<ICard> = ({ id, name, image, price, description, instock}) => {
  return (
    <a href="/#" className={s.product}>
      <div className={instock ? s.product__instock : s.product__no__instock}>
        <span>{instock ? 'В наличии' : 'Нет в наличии'}</span>
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
