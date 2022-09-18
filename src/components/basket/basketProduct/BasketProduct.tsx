import React, { FC } from 'react'
import { useDispatch } from 'react-redux';
import { priceFormatter } from '../../../helpers/formatter/priceFormatter';
import basket, { addToBasket, removeFromBasket } from '../../../redux/slices/basket';
import { IProduct } from '../../../types/product'
import s from './basketProduct.module.scss'

const BasketProduct: FC<IProduct> = ({ id, name, image, price, instock, brand, amount }) => {
  const dispatch = useDispatch();
  // const totalItemPrice = (price: number, amount: number):number => Number(price * amount);
  const RUB = priceFormatter("RUB", price);

  const onDeleteItem = () => {
    dispatch(removeFromBasket({id}))
  }

  const onInsreaseQuantity = () => {
    dispatch(addToBasket({id, name, image, price, instock, brand, amount}))
  }


  return (
    <tr className={s.basket__item}>
      <td className={s.item__image}><img src={image} title={name} /></td>
      <td className={s.item__name}>{name}</td>
      <td className={s.item__quantity}>
        <div className={s.quantity}>
          <button className={s.quantity__btn__plus} type='button'>-</button>
          <input className={s.quantity__input} maxLength={4} type="text" />
          <button className={s.quantity__btn__minus} type='button' onClick={onInsreaseQuantity}>+</button>
        </div>
      </td>
      <td className={s.item__price}>{RUB}</td>
      <td className={s.item__remove}><button className={s.remove__btn} type="button" onClick={onDeleteItem}>×</button></td>
    </tr>
  )
}

export default BasketProduct