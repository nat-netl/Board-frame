import React, {FC} from "react";
import { IProductsInHomePage } from "../../types/product";
import ProductList from "./product list/ProductList";

const Products: FC<IProductsInHomePage> = ({inHomePage}) => {
  return (
    <ProductList inHomePage={inHomePage} />
  );
}

export default Products
