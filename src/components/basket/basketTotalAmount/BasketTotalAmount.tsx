import React, { FC } from 'react'
import { priceFormatter } from '../../../helpers/formatter/priceFormatter'
import { getBasketTotal } from '../../../redux/slices/basket'
import { BasketState } from '../../../types/basket'
import BuyBlueButton from '../../ui/buttons/buyBlueButton/BuyBlueButton'
import s from "./basketTotalAmount.module.scss"

const BasketTotalAmount: FC<any> = ({ basket }) => {
  return (
    <div className={s.total}>
      <div className={s.total__amount}><span className={s.total__amount__text}>Итого</span><span>{priceFormatter("RUB", getBasketTotal(basket))}</span></div>
      <BuyBlueButton>Купить</BuyBlueButton>
    </div>
  )
}

export default BasketTotalAmount