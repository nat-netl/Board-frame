import React, {FC} from 'react'
import s from './h1ForCatalog.module.scss'

interface IH1 {
  children: string
}

const H1ForCatalog: FC<IH1> = ({children, ...props}) => {
  return (
    <h1 {...props} className={s.h1__for__catalog}>{children}</h1>
  )
}

export default H1ForCatalog