import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./header.module.scss";
import logo from "./../../assets/images/logo_transparent.png";
import Navbar from "./navbar/Navbar";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useAppSelector } from "../../hooks/redux";
import classNames from "classnames";
import SearchIcon from '@mui/icons-material/Search';
import { basketPath, searchPath } from "../../constants/routes";

const Header = () => {
  const { basket } = useAppSelector((state) => state.basket);
  const basketLength: number = basket.length;
  const [srollTriger, setScrollTriger] = useState<boolean>(false);

  const changeBorder = () => {
    if (window.scrollY > 30) {
      setScrollTriger(true);
    } else {
      setScrollTriger(false);
    }
  };
  window.addEventListener("scroll", changeBorder);

  return (
    <header className={s.header}>
      <div
        className={classNames(s.wrapper, srollTriger ? s.border__bottom : "")}
      >
        <div className={s.wrapper__nav}>
          <div className={s.logo__wrapper}>
            <Link to="/">
              <img src={logo} alt="header-logo" />
            </Link>
          </div>
          <Navbar />
        </div>
        <div className={s.icons__list}>
          <Link className={s.link__to__searching} to={searchPath}>
            <SearchIcon />
          </Link>
          
          <Link className={s.link__to__basket} to={basketPath}>
            <LocalMallOutlinedIcon sx={{ fontSize: 26 }} />
            {basketLength !== 0 ? (
              <span className={s.basket__length}>{basketLength}</span>
            ) : (
              ""
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
