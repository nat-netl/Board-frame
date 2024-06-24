import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { privateRoutes } from "./constants/routes";
import m from "./assets/styles/main.module.scss";
import ErrorBoundary from "./components/errorBoundery/ErrorBoundery";

const App = () => {
  return (
    <div className={m.wrapper}>
      <Router basename="/">
        <Header />
          <Routes>
            {privateRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={<ErrorBoundary>{route.element}</ErrorBoundary>} />
            ))}
          </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
