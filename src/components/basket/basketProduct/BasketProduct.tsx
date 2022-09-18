import React, { FC } from 'react'
import { useDispatch } from 'react-redux';
import { priceFormatter } from '../../../helpers/formatter/priceFormatter';
import basket, { removeFromBasket } from '../../../redux/slices/basket';
import { IProduct } from '../../../types/product'
import s from './basketProduct.module.scss'

const BasketProduct: FC<IProduct> = ({ id, name, image, price, instock }) => {
  const dispatch = useDispatch();
  const RUB = priceFormatter("RUB", price);

  const onDeleteItem = () => {
    dispatch(removeFromBasket({id}))
  }

  return (
    <tr className={s.basket__item}>
      <td className={s.item__image}><img src={image} title={name} /></td>
      <td className={s.item__name}>{name}</td>
      <td className={s.item__quantity}>
        <div className={s.quantity}>
          <button className={s.quantity__btn__plus} type='button'>-</button>
          <input className={s.quantity__input} maxLength={4} type="text" />
          <button className={s.quantity__btn__minus} type='button'>+</button>
        </div>
      </td>
      <td className={s.item__price}>{RUB}</td>
      <td className={s.item__remove}><button className={s.remove__btn} type="button" onClick={onDeleteItem}>×</button></td>
    </tr>
  )
}

export default BasketProduct