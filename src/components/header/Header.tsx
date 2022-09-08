import React from "react";
import { Link } from "react-router-dom";
import s from "./header.module.scss";
import logo from "./../../assets/images/logo_transparent.png";
import Navbar from "./navbar/Navbar";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useAppSelector } from "../../hooks/redux";

function Header() {
  const {basket} = useAppSelector ((state) => state.basket);
  const basketLength: number = basket.length
  
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.wrapper__nav}>
          <div className={s.logo__wrapper}>
            <Link to="/">
              <img src={logo} alt="header-logo" />
            </Link>
          </div>
          <Navbar />
        </div>
        <div className={s.basket}>
          <Link className={s.link__to__basket} to="/basket"><LocalMallOutlinedIcon sx={{ fontSize: 26 }} />{basketLength !== 0 ? <span className={s.basket__length}>{basketLength}</span> : ''}</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
