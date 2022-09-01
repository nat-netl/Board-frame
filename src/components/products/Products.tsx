import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/redux";
import s from "./products.module.scss";

function Products() {
  const dispatch = useDispatch();
  const { card } = useAppSelector((state) => state.card);

  console.log (card)

  return (
    <div className={s.products}>
      <div className={s.products__list}>{JSON.stringify(card)}</div>
    </div>
  );
}

export default Products;
