import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { fetchBrands } from "../../../redux/actions/FilterActionCreators";
import { fetchProducts } from "../../../redux/actions/ProductsActionCreators";
import { IBrand } from "../../../types/brand";
import s from "./filtersByBrands.module.scss";

const FiltersByBrands = () => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.filters);
  const [filterBrand, setFilterBrand] = useState<IBrand>({ id: 0, brand: "" });
  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchProducts({ brand: filterBrand.brand }));
  }, [dispatch, filterBrand]);

  return (
    <div className={s.brand}>
      {filter.map((brand) => (
        <button
          key={brand.id}
          className={s.brand__btn}
          onClick={() => setFilterBrand({ id: brand.id, brand: brand.brand })}
        >
          {brand.brand}
        </button>
      ))}
    </div>
  );
};

export default FiltersByBrands;
