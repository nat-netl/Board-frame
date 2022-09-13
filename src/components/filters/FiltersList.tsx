import React from 'react'
import s from './filtersList.module.scss';
import FiltersByBrands from './filtersByBrands/FiltersByBrands';

const filtersList = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__filters}>
        <div className={s.filter__row}>
          <div className={s.filter__column}>
            <FiltersByBrands />
          </div>
        </div>
      </div>
    </div>
  )
}

export default filtersList