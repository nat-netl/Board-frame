import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./productIdCard.module.scss";
import m from "./../../../assets/styles/main.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { addToBasket } from "../../../redux/slices/basket";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BuyGreenButton from "../../ui/buttons/buy-button/BuyGreenButton";
import Instock from "../../ui/instock/Instock";
import { priceFormatter } from "../../../helpers/formatter/priceFormatter";
import { fetchProductsById } from "../../../redux/actions/ProductsActionCreators";

const ProductIdCard = () => {
  const { id }: any = useParams();
  const { basket } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();
  const {
    products: product,
    isLoading,
    error,
  } = useAppSelector((state) => state.card);
  useEffect(() => {
    dispatch(fetchProductsById(id));
  }, [dispatch, id]);
  const isExistsInCard = basket.some((p) => p.id === product[0]?.id);
  const RUB = priceFormatter("RUB", product[0]?.price);

  return (
    <div className={s.product}>
      <div className={m.container}>
        <div className={s.buy__card}>
          <div className={s.image__card}>
            <LazyLoadImage
              effect="blur"
              src={product[0]?.image}
              alt={product[0]?.name}
              placeholderSrc={product[0]?.image}
            />
          </div>
          <div className={s.info__wrapper}>
            <div className={s.product__name}>
              <h1>{product[0]?.name}</h1>
              <Instock instock={product[0]?.instock} />
            </div>

            <BuyGreenButton
              inBasket={isExistsInCard}
              inStock={product[0]?.instock}
              onClick={() =>
                dispatch(
                  addToBasket([
                    {
                      id: product[0]?.id,
                      brand: product[0]?.brand,
                      name: product[0]?.name,
                      image: product[0]?.image,
                      price: product[0]?.price,
                      description: product[0]?.description,
                      instock: product[0]?.instock,
                    },
                  ])
                )
              }
            >
              {<span className={m.addToBasket}>{!isLoading && RUB}</span>}

              {isLoading
                ? "..."
                : isExistsInCard
                ? "Товар уже добавлен"
                : product[0]?.instock
                ? "Добавить в корзину"
                : "Товара нет в наличии"}
            </BuyGreenButton>
          </div>
        </div>

        <div className={s.bottom__card}>
          <div className={s.description__card}>
            <h2>Описание</h2>
            {product[0]?.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIdCard;
