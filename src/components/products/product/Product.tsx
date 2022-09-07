import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../../types/card";
import s from "./product.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Product: FC<IProduct> = ({ id, name, image, price, instock }) => {
  return (
    <Link to={`${id}`} className={s.product}>
      <div className={instock ? s.product__instock : s.product__no__instock}>
        <span>{instock ? "В наличии" : "Нет в наличии"}</span>
      </div>

      <div className={s.product__image}>
        <LazyLoadImage
          effect="blur"
          src={image}
          alt={name}
          placeholderSrc={image}
        />
      </div>

      <div className={s.product__info}>
        <div className={s.name}>
          <h2>{name}</h2>
        </div>

        <div className={s.price}>
          <span>{price} ₽</span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
