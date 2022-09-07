import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { productAPI } from "../../../redux/services/ProductService";
import s from "./productIdCard.module.scss";
import m from "./../../../assets/styles/main.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { addToBasket } from "../../../redux/slices/basket";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ProductIdCard() {
  const { id }: any = useParams();
  const { data: product } = productAPI.useFetchIdProductQuery<any>(id);
  const { basket, isLoading } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();
  const isExistsInCard = basket.some(
    (p) => p.id === (product && product[0].id)
  );

  return (
    <div className={s.product}>
      <div className={m.container}>
        <div className={s.buy__card}>
          <div className={s.image__card}>
            <LazyLoadImage
              effect="blur"
              src={product && product[0].image}
              alt={product && product[0].name}
              placeholderSrc={product && product[0].image}
            />
          </div>
          <div className={s.info__wrapper}>
            <div className={s.product__name}>
              <h1>{product && product[0].name}</h1>
            </div>

            <button
              className={isExistsInCard ? s.bought__button : s.buy__button}
              disabled={isExistsInCard}
              onClick={() =>
                dispatch(
                  addToBasket([
                    {
                      id: product && product[0].id,
                      name: product && product[0].name,
                      image: product && product[0].image,
                      price: product && product[0].price,
                      description: product && product[0].description,
                      instock: product && product[0].instock,
                    },
                  ])
                )
              }
            >
              <span className={m.addToBasket}>
                {product && product[0].price} ₽
              </span>{" "}
              {isLoading
                ? "Добавляем в корзину"
                : isExistsInCard
                ? "Товар уже добавлен"
                : "Добавить в корзину"}
            </button>
          </div>
        </div>

        <div className={s.bottom__card}>
          <div className={s.description__card}>
            <h2>Описание</h2>
            {product && product[0].description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductIdCard;
