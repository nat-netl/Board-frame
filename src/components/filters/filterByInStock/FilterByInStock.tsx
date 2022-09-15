import React, { FC, useState, useEffect, memo } from "react";
import s from "./filterByInStock.module.scss";
import m from "./../../../assets/styles/main.module.scss";
import classNames from "classnames";
import { IAvalibility, IFilterState } from "../../../types/filters";
import { InitialFiltersByIAvalibility } from "../../../constants/initialFilterValues";

const FilterByInStock: FC<IFilterState> = ({
  filter,
  setFilter,
}) => {
  const [activeFilter, setActiveFilter] = useState<IAvalibility>({});

  useEffect(() => {
    setFilter({
      ...filter,
      inStock: activeFilter.booleanValue,
    });
  }, [activeFilter]);

  return (
    <div className={s.filter}>
      <h3 className={s.title__filter}>Наличие</h3>
      <div className={s.items__filter}>
        {InitialFiltersByIAvalibility.map((instock) => (
          <input
            key={instock.id}
            className={classNames(
              m.filterBtn,
              instock.id === activeFilter.id ? s.active__filterBtn : null
            )}
            onClick={() =>
              instock.id !== activeFilter.id
                ? setActiveFilter({
                    id: instock.id,
                    typeFilterByInStock: instock.typeFilterByInStock,
                    booleanValue: instock.booleanValue,
                  })
                : setActiveFilter({})
            }
            type="button"
            name="inStock"
            value={instock.typeFilterByInStock}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(FilterByInStock);
