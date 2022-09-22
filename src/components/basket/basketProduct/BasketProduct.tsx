import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux';
import { priceFormatter } from '../../../helpers/formatter/priceFormatter';
import basket, { addToBasket, removeFromBasket } from '../../../redux/slices/basket';
import { IQuantityState } from '../../../types/basket';
import { IProduct } from '../../../types/product'
import s from './basketProduct.module.scss'

const BasketProduct: FC<IProduct> = ({ id, name, image, price, instock, brand, amount }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState<any>(amount);

  const onDeleteItem = () => {
    dispatch(removeFromBasket({ id }))
  }

const onDecreaseQuantity = () => {
    // if (amount > 1) {
    //   dispatch(decreaseStuffQuantity({ id, amount, name, platform, price }));
    // } else {
      // dispatch(removeFromCart(id));
    // }
  };

  // const onInputQuantity = (value: number) => {
  //   dispatch(addToBasket({ id, name, image, price, instock, brand, amount }))
  // }

  const onInsreaseQuantity = () => {
    dispatch(addToBasket({ id, name, image, price, instock, brand, amount }))
    setQuantity (amount && amount++)
  }

  return (
    <tr className={s.basket__item}>
      <td className={s.item__image}><img src={image} title={name} /></td>
      <td className={s.item__name}>{name}</td>
      <td className={s.item__quantity}>
        <div className={s.quantity}>
          <button className={s.quantity__btn__plus} type='button'>-</button>
          <input className={s.quantity__input} maxLength={4} onChange={(e) => setQuantity(e.target.value)} value={quantity} type="number" />
          <button className={s.quantity__btn__minus} type='button' onClick={onInsreaseQuantity}>+</button>
        </div>
      </td>
      <td className={s.item__price}>{amount && amount ? price * amount : price} ₽</td>
      <td className={s.item__remove}><button className={s.remove__btn} type="button" onClick={onDeleteItem}>×</button></td>
    </tr>
  )
}

export default BasketProduct