import React, { useState } from "react";
import s from "./search.module.scss";
import m from "./../../assets/styles/main.module.scss";
import H1ForProducts from "../../components/ui/h1/h1ForCatalog/H1ForProducts";
import { useLocation } from "react-router-dom";
import { routesForGuest } from "../../constants/routes";
import SearchForm from "../../components/search/searchForm/SearchForm";
import ProductList from "../../components/products/product list/ProductList";
import { useAppDispatch } from "../../hooks/redux";
import { fetchProducts } from "../../redux/actions/ProductsActionCreators";

const Search = () => {
  const currentRouter = useLocation().pathname;
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchProducts({ name: searchValue }));
  };

  return (
    <div className={s.wrapper}>
      <div className={m.container}>
        <div className={s.search}>
          <div className={s.search__column}>
            <header className={s.search__header}>
              {routesForGuest.map(
                (route, index) =>
                  route.path === currentRouter && (
                    <H1ForProducts key={index}>{route.title}</H1ForProducts>
                  )
              )}
            </header>
            <SearchForm
              handleSubmit={handleSubmit}
              setSearchValue={setSearchValue}
            />
          </div>
        </div>
        {searchValue && <ProductList />}
      </div>
    </div>
  );
};

export default Search;
