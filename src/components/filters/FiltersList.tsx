import React, { FC, useEffect, memo, useState } from "react";
import s from "./filtersList.module.scss";
import FilterByBrands from "./filtersByBrands/FilterByBrands";
import FilterByInStock from "./filterByInStock/FilterByInStock";
import { IProductFilters } from "../../types/filters";

interface IFiltersStack {
  id: number;
  component: JSX.Element;
}

const FiltersList: FC<any> = ({ getFilteredByAll }) => {
  const [filter, setFilter] = useState<IProductFilters>({});

  useEffect(() => {
    getFilteredByAll({ brand: filter.brand, inStock: filter.inStock });
  }, [filter]);

  const filtersStack: IFiltersStack[] = [
    {
      id: 0,
      component: (
        <FilterByBrands filterBrand={filter} setFilterBrand={setFilter} />
      ),
    },
    {
      id: 1,
      component: (
        <FilterByInStock
          filterAvailability={filter}
          setFilterAvailability={setFilter}
        />
      ),
    },
  ];

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__filters}>
        <div className={s.filter__row}>
          {filtersStack.map((filter) => (
            <div key={filter.id} className={s.filter__column}>
              {filter.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(FiltersList);
