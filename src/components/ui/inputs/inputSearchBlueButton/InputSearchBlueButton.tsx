import React, { FC } from "react";
import s from "./inputSearchBlueButton.module.scss";

interface IInputSearchBlueButton {
  value: string;
  onClick: () => void
}

const InputSearchBlueButton: FC<IInputSearchBlueButton> = ({ value, onClick, ...props }) => {
  return <input {...props} className={s.blue__button} onClick={onClick} type="submit" value={value} />;
};

export default InputSearchBlueButton;
