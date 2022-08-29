import React from "react";
import { Link } from "react-router-dom";
import s from "./header.module.scss";
import logo from './../../assets/images/logo_transparent.png'

function Header() {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo__wrapper}>
          <Link to="/">
            <img src={logo} alt="header-logo" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
