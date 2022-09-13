import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { fetchBrands } from "../../../redux/actions/FilterActionCreators";
import { fetchProducts } from "../../../redux/actions/ProductsActionCreators";
import { IBrand } from "../../../types/brand";
import s from "./filtersByBrands.module.scss";
import m from "./../../../assets/styles/main.module.scss";
import classNames from "classnames";

const FiltersByBrands = () => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.filters);
  const [activeFilterBrand, setActiveFilterBrand] = useState<IBrand>({});
  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchProducts({ brand: activeFilterBrand.brand }));
  }, [dispatch, activeFilterBrand]);

  return (
    <div className={s.filter}>
      <h3 className={s.title__filter} onClick={() => setActiveFilterBrand({})}>
        Брэнд
      </h3>
      <div className={s.items__filter}>
        {filter.map((brand) => (
          <button
            key={brand.id}
            className={classNames(
              m.filterBtn,
              brand.id === activeFilterBrand.id ? s.active__filterBtn : null
            )}
            onClick={() =>
              brand.id !== activeFilterBrand.id
                ? setActiveFilterBrand({ id: brand.id, brand: brand.brand })
                : setActiveFilterBrand({})
            }
          >
            {brand.brand}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FiltersByBrands;
