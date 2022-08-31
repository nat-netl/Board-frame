import React from "react";
import Product from "./product/Product";
import s from "./products.module.scss";

function Products() {
  return (
    <div className={s.products}>
      <div className={s.products__list}>
        <Product
          id={64353}
          image="https://static.insales-cdn.com/images/products/1/4161/582332481/1.jpg"
          name="Ducky One 3 Mini Black"
          price={11490}
          description="One 3 — новая глава в истории Ducky. Клавиатура порадует обновленным 
            корпусом, возможностью менять переключатели 
            без паяльника, пятью слоями для настройки, стоковой виброизоляцией и это — не конец."
        />

        <Product
          id={64353}
          image="https://static.insales-cdn.com/images/products/1/4161/582332481/1.jpg"
          name="Ducky One 3 Mini Black"
          price={11490}
          description="One 3 — новая глава в истории Ducky. Клавиатура порадует обновленным 
            корпусом, возможностью менять переключатели 
            без паяльника, пятью слоями для настройки, стоковой виброизоляцией и это — не конец."
        />
        <Product
          id={64353}
          image="https://static.insales-cdn.com/images/products/1/4161/582332481/1.jpg"
          name="Ducky One 3 Mini Black"
          price={11490}
          description="One 3 — новая глава в истории Ducky. Клавиатура порадует обновленным 
            корпусом, возможностью менять переключатели 
            без паяльника, пятью слоями для настройки, стоковой виброизоляцией и это — не конец."
        />
        <Product
          id={64353}
          image="https://static.insales-cdn.com/images/products/1/4161/582332481/1.jpg"
          name="Ducky One 3 Mini Black"
          price={11490}
          description="One 3 — новая глава в истории Ducky. Клавиатура порадует обновленным 
          корпусом, возможностью менять переключатели 
          без паяльника, пятью слоями для настройки, стоковой виброизоляцией и это — не конец."
        />
        <Product
          id={64353}
          image="https://static.insales-cdn.com/images/products/1/4161/582332481/1.jpg"
          name="Ducky One 3 Mini Black"
          price={11490}
          description="One 3 — новая глава в истории Ducky. Клавиатура порадует обновленным 
        корпусом, возможностью менять переключатели 
        без паяльника, пятью слоями для настройки, стоковой виброизоляцией и это — не конец."
        />
        <Product
          id={64353}
          image="https://static.insales-cdn.com/images/products/1/4161/582332481/1.jpg"
          name="Ducky One 3 Mini Black"
          price={11490}
          description="One 3 — новая глава в истории Ducky. Клавиатура порадует обновленным 
      корпусом, возможностью менять переключатели 
      без паяльника, пятью слоями для настройки, стоковой виброизоляцией и это — не конец."
        />
      </div>
    </div>
  );
}

export default Products;
