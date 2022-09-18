import React from 'react'
import { useAppSelector } from '../../../hooks/redux'
import BasketProduct from '../basketProduct/BasketProduct'
import s from "./basketList.module.scss"

const BasketList = () => {
  const { basket } = useAppSelector(state => state.basket)

  // console.log(basket)
  return (
    <div className={s.basket__list}>
      <table>
        <tbody className={s.basket__items}>
          {
            basket.map((product) => (
              <BasketProduct
                key={product.id}
                id={product.id}
                name={product.name}
                brand={product.brand}
                image={product.image}
                price={product.price}
                instock={product.instock}
              />
            ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default BasketList