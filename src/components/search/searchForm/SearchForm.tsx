import React, { useState } from "react";
import InputSearch from "../../ui/inputs/inputSearch/InputSearch";
import s from "./seachForm.module.scss";
import InputSearchBlueButton from "../../ui/inputs/inputSearchBlueButton/InputSearchBlueButton";

const SearchForm = ({ ...props }) => {
  const [value, setValue] = useState<any>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form className={s.search__form} {...props}>
      <InputSearch handleChange={handleChange} value={value} />
      <InputSearchBlueButton value="Искать" />
    </form>
  );
};

export default SearchForm;
