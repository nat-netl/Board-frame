import React from 'react'
import BuyBlueButton from '../../ui/buttons/buyBlueButton/BuyBlueButton'
import s from "./basketTotalAmount.module.scss"

const BasketTotalAmount = () => {
  return (
    <div className={s.total}>
      <div className={s.total__amount}><span className={s.total__amount__text}>Итого</span><span>123</span></div>
      <BuyBlueButton>Купить</BuyBlueButton>
    </div>
  )
}

export default BasketTotalAmount