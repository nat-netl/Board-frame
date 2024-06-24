import React from "react";
import s from "./CardSkeleton.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ cards }: number | any) => {
  return (
    <>
      {Array(cards)
        .fill(0)
        .map((item, index) => (
          <div className={s.product} key={index}>
            <div className={s.product__instock}>
              <span>
                <Skeleton width={80} height={20} />
              </span>
            </div>

            <div className={s.product__image}>
              <Skeleton width={`100%`} height={270} />
            </div>

            <div className={s.product__info}>
              <div className={s.name}>
                <h2>
                  <Skeleton />
                </h2>
              </div>

              <div className={s.price}>
                <span>
                  <Skeleton width={120} />
                </span>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CardSkeleton;
