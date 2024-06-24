import React, { FC } from 'react'
import s from "./buyBlueButton.module.scss"

interface IBuyBlueButtonProps {
  children: string,
  onClick?: () => void
}

const BuyBlueButton: FC<IBuyBlueButtonProps> = ({children, ...props }) => {
  return (
    <button {...props} className={s.blue__btn} type='button'>{children}</button>
  )
}

export default BuyBlueButton