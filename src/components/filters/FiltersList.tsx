import React, { FC, useEffect, memo, useState } from "react";
import s from "./filtersList.module.scss";
import FilterByBrands from "./filtersByBrands/FilterByBrands";
import FilterByInStock from "./filterByInStock/FilterByInStock";
import { IFilteredByAll, IFilterRoutes, IProductFilters } from "../../types/filters";

const FiltersList: FC<IFilteredByAll> = ({ getFilteredByAll }) => {
  const [filter, setFilter] = useState<IProductFilters>({});

  useEffect(() => {
    getFilteredByAll({ brand: filter.brand, inStock: filter.inStock });
  }, [filter]);

  const filterRoutes: IFilterRoutes[] = [
    {
      id: 0,
      component: (
        <FilterByBrands 
        filter={filter} 
        setFilter={setFilter}
        />
      ),
    },
    {
      id: 1,
      component: (
        <FilterByInStock
        filter={filter}
        setFilter={setFilter}
        />
      ),
    },
  ];

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__filters}>
        <div className={s.filter__row}>
          {filterRoutes.map((filter) => (
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
