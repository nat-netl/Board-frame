import React, { FC, useEffect, memo } from "react";
import s from "./filtersList.module.scss";
import FiltersByBrands from "./filtersByBrands/FiltersByBrands";
import FilterByInStock from "./filterByInStock/FilterByInStock";
import { useAppDispatch } from "../../hooks/redux";
import { fetchProducts } from "../../redux/actions/ProductsActionCreators";

interface IFiltersStack {
  id: number;
  component: JSX.Element;
}

const FiltersList: FC<any> = ({getFilteredByAll}) => {
  const filtersStack: IFiltersStack[] = [
    { id: 0, component: <FiltersByBrands /> },
    { id: 1, component: <FilterByInStock /> },
  ];

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(event.target)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__filters}>
        <form className={s.filter__row} onSubmit={handleSubmit}>
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
