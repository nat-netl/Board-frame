import React, { FC, useState, useEffect, memo } from "react";
import s from "./filterByInStock.module.scss";
import m from "./../../../assets/styles/main.module.scss";
import classNames from "classnames";
import { Availability } from "../../../constants/initialFilterValues";

interface IInStock {
  id?: number;
  typeFilterByInStock?: string;
  booleanValue?: boolean;
}

const FilterByInStock: FC<any> = ({
  filterAvailability,
  setFilterAvailability,
}) => {
  const [activeFilter, setActiveFilter] = useState<IInStock>({});

  const inStockType: IInStock[] = [
    { id: 0, typeFilterByInStock: Availability.InStock, booleanValue: true },
    { id: 1, typeFilterByInStock: Availability.OutStock, booleanValue: false },
  ];
  useEffect(() => {
    setFilterAvailability({
      ...filterAvailability,
      inStock: activeFilter.booleanValue,
    });
  }, [activeFilter]);

  return (
    <div className={s.filter}>
      <h3 className={s.title__filter}>Наличие</h3>
      <div className={s.items__filter}>
        {inStockType.map((instock) => (
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