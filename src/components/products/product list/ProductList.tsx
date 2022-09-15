import React, { useEffect } from "react";
import Product from "../product/Product";
import s from "./productList.module.scss";
import m from "./../../../assets/styles/main.module.scss";
import CardSkeleton from "../../ui/skeletons/cardSkeleton/CardSkeleton";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { fetchProducts } from "../../../redux/actions/ProductsActionCreators";
import FilterList from "../../filters/FiltersList";
import { IProductFilters } from "../../../types/filters";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector((state) => state.card);
  const getFilteredByAll = (values: IProductFilters) => {
    dispatch(fetchProducts({ brand: values.brand, inStock: values.inStock }));
  };

  useEffect(() => {
    getFilteredByAll({});
  }, []);

  return (
    <div className={s.products}>
      <div className={m.container}>
        <FilterList getFilteredByAll={getFilteredByAll} />

        <div className={s.products__list}>
          {!isLoading &&
            products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                brand={product.brand}
                name={product.name}
                image={product.image}
                price={product.price}
                instock={product.instock}
                description={product.description}
              />
            ))}
          {isLoading && <CardSkeleton cards={8} />}
          
        </div>
        {error && <h2>{error}</h2>}
        {products.length <= 0 ? <h2>По вашему запросу ничего не найдено</h2> : null}
      </div>
    </div>
  );
};

export default ProductList;
