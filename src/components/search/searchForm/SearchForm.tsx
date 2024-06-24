import React, { useState, FC } from "react";
import InputSearch from "../../ui/inputs/inputSearch/InputSearch";
import s from "./seachForm.module.scss";
import InputSearchBlueButton from "../../ui/inputs/inputSearchBlueButton/InputSearchBlueButton";

interface ISearchFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  setSearchValue: (value: string) => void 
}

const SearchForm: FC<ISearchFormProps> = ({ handleSubmit, setSearchValue, ...props }) => {
  const [value, setValue] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const setSearchValueByClick = () => {
    setSearchValue (value)
  }

  return (
    <form onSubmit={handleSubmit} className={s.search__form} {...props}>
      <InputSearch handleChange={handleChange} value={value} />
      <InputSearchBlueButton value="Искать" onClick={setSearchValueByClick} />
    </form>
  );
};

export default SearchForm;
