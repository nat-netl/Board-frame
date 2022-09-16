import React, { FC } from "react";
import s from "./inputSearchBlueButton.module.scss";

interface IInputSearchBlueButton {
  value: string;
}

const InputSearchBlueButton: FC<IInputSearchBlueButton> = ({ value }) => {
  return <input className={s.blue__button} type="submit" value={value} />;
};

export default InputSearchBlueButton;
