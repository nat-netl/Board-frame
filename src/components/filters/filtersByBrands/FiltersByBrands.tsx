import React, { FC, useState, useEffect, memo } from "react";
import { IBrand } from "../../../types/filters";
import s from "./filtersByBrands.module.scss";
import m from "./../../../assets/styles/main.module.scss";
import classNames from "classnames";
import { Brands } from "../../../constants/initialFilterValues";

const FiltersByBrands: FC<any> = ({ setFilterBrand, filterBrand }) => {
  const [activeFilter, setActiveFilter] = useState<IBrand>({});
  const brands = [
    { id: 0, brand: Brands.Ducky },
    { id: 1, brand: Brands.Varmilo },
  ];

  useEffect(() => {
    setFilterBrand({ ...filterBrand, brand: activeFilter.brand });
  }, [activeFilter]);

  return (
    <div className={s.filter}>
      <h3 className={s.title__filter}>Брэнд</h3>
      <div className={s.items__filter}>
        {brands.map((brand) => (
          <input
            key={brand.id}
            className={classNames(
              m.filterBtn,
              brand.id === activeFilter.id ? s.active__filterBtn : null
            )}
            onClick={() =>
              brand.id !== activeFilter.id
                ? setActiveFilter({ id: brand.id, brand: brand.brand })
                : setActiveFilter({})
            }
            name="brand"
            type="button"
            value={brand.brand}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(FiltersByBrands);
