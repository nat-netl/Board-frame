import React, { FC, useEffect, memo, useRef, useState } from "react";
import s from "./filtersList.module.scss";
import FiltersByBrands from "./filtersByBrands/FiltersByBrands";
import FilterByInStock from "./filterByInStock/FilterByInStock";
import { IFiltersByAll } from "../../types/filters";

interface IFiltersStack {
  id: number;
  component: JSX.Element;
}

const FiltersList: FC<any> = ({getFilteredByAll}) => {
  const [filter, setFilter] = useState<IFiltersByAll[]>([{}])
  console.log (filter)

  const filtersStack: IFiltersStack[] = [
    { id: 0, component: <FiltersByBrands   setFilter={setFilter} /> },
    { id: 1, component: <FilterByInStock  setFilter={setFilter} /> },
  ];

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__filters}>
        <form className={s.filter__row} onSubmit={getFilteredByAll}>
          {filtersStack.map((filter) => (
            <div key={filter.id} className={s.filter__column}>
              {filter.component}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default memo(FiltersList);
