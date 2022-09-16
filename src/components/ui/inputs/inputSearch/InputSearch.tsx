import React, {FC} from "react";
import s from "./inputSeach.module.scss";

interface IInputSearch {
  value?: string,
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputSearch: FC<IInputSearch> = ({value, handleChange}) => {
  return <input className={s.input__search} type="text" value={value} onChange={handleChange} placeholder="Поиск по товарам" />;
};

export default InputSearch;
