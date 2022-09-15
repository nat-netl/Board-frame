import React from "react";
import { useLocation } from "react-router-dom";
import Products from "../../components/products/Products";

const Home = () => {
  const inHomePage: string = useLocation().pathname;

  return (
    <>
      <Products inHomePage={inHomePage} />
    </>
  );
};

export default Home;
