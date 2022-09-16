import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Keyboards from "./pages/keyboards/Keyboards";
import ProductIdCard from "./components/products/productIdCard/ProductIdCard";
import Search from "./pages/search/Search";

const App = () => {
  return (
    <>
      <Router basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/keyboards" element={<Keyboards />} />
          <Route path="/keyboards/:id" element={<ProductIdCard />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
