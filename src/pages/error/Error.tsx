import React from "react";
import s from "./error.module.scss";

const Error = () => {
  return (
    <div className={s.error}>
      <strong>Что-то пошло не так!</strong>
    </div>
  );
};

export default Error;
