import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { privateRoutes } from "./constants/routes";

const App = () => {
  return (
    <>
      <Router basename="/">
        <Header />
        <Routes>
          {privateRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
