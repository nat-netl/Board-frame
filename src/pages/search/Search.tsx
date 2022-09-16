import React from "react";
import s from "./search.module.scss";
import m from "./../../assets/styles/main.module.scss";
import H1ForProducts from "../../components/ui/h1/h1ForCatalog/H1ForProducts";
import { useLocation } from "react-router-dom";
import { routesForGuest } from "../../constants/routes";
import SearchForm from "../../components/search/searchForm/SearchForm";

const Search = () => {
  const currentRouter = useLocation().pathname;

  return (
    <div className={s.wrapper}>
      <div className={m.container}>
        <div className={s.search}>
          <div className={s.search__column}>
            <header className={s.search__header}>
              {routesForGuest.map(
                (route) =>
                  route.path === currentRouter && (
                    <H1ForProducts>{route.title}</H1ForProducts>
                  )
              )}
            </header>

            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
