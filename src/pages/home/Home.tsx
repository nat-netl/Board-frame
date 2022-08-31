import React from 'react'
import s from '../../assets/styles/main.module.scss'
import Products from '../../components/products/Products'

function Home() {
  return (
    <div className={s.сontainer}>
      <Products />
    </div>
  )
}

export default Home