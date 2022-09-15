import React, { FC, useState, useEffect, memo } from "react";
import { IBrand, IFilterState } from "../../../types/filters";
import s from "./filtersByBrands.module.scss";
import m from "./../../../assets/styles/main.module.scss";
import classNames from "classnames";
import { InitialFiltersByBrands } from "../../../constants/initialFilterValues";

const FilterByBrands: FC<IFilterState> = ({ filter, setFilter }) => {
  const [activeFilter, setActiveFilter] = useState<IBrand>({});

  useEffect(() => {
    setFilter({ ...filter, brand: activeFilter.brand });
  }, [activeFilter]);

  return (
    <div className={s.filter}>
      <h3 className={s.title__filter}>Брэнд</h3>
      <div className={s.items__filter}>
        {InitialFiltersByBrands.map((brand) => (
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

export default memo(FilterByBrands);
