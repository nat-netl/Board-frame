import React from "react";
import { routesForGuest } from "../../constants/routes";
import ProductList from "./product list/ProductList";
import H1ForProducts from "../ui/h1/h1ForCatalog/H1ForProducts";
import m from "./../../assets/styles/main.module.scss";
import s from "./products.module.scss";
import { useLocation } from "react-router-dom";

const Products = () => {
  const currentRouter = useLocation().pathname;

  return (
    <div className={s.products}>
      <div className={m.container}>
        <header className={s.products__header}>
          {routesForGuest.map(
            (route, index) =>
              route.path === currentRouter && (
                <H1ForProducts key={index}>{route.title}</H1ForProducts>
              )
          )}
        </header>
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
