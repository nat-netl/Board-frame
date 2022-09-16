import React, {FC} from 'react'
import s from './h1ForProducts.module.scss'

interface IH1 {
  children: string
}

const H1ForProducts: FC<IH1> = ({children, ...props}) => {
  return (
    <h1 {...props} className={s.h1__for__products}>{children}</h1>
  )
}

export default H1ForProducts