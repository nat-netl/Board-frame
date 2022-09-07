import React from "react";
import { productAPI } from "../../../redux/services/ProductService";
import Product from "../product/Product";
import s from "./productList.module.scss";
import m from "./../../../assets/styles/main.module.scss";
import CardSkeleton from "../../ui/skeletons/cardSkeleton/CardSkeleton";

function ProductList() {
  const {
    data: products,
    isLoading,
    isError,
  } = productAPI.useFetchAllProductsQuery(0);
  return (
    <div className={s.products}>
      <div className={m.container}>
        <div className={s.products__list}>
          {products &&
            products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                instock={product.instock}
                description={product.description}
              />
            ))}
          {isLoading && <CardSkeleton cards={8} />}
          {isError && <h1>Что-то пошло не так</h1>}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
