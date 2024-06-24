import React, { FC } from 'react'
import BasketProduct from '../basketProduct/BasketProduct'
import s from "./basketList.module.scss"
import { IProduct } from '../../../types/product'
import { BasketState } from '../../../types/basket'

const BasketList: FC<BasketState> = ({ basket }) => {

  return (
    <div className={s.basket__list}>
      <table>
        <tbody className={s.basket__items}>
          {
            basket.map((product: IProduct) => (
              <BasketProduct
                key={product.id}
                id={product.id}
                name={product.name}
                brand={product.brand}
                image={product.image}
                price={product.price}
                instock={product.instock}
                amount={product.amount}
              />
            ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default BasketList