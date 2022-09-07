import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routesForGuest } from "../../../constants/navbar";
import s from "./navbar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import classNames from "classnames";

function Navbar() {
  const [openBurger, setOpenBurger] = useState<boolean>(false);

  return (
    <nav
      className={classNames(s.nav, openBurger ? s.menuIsOpen : s.menuIsClose)}
    >
      <div
        role="button"
        tabIndex={0}
        className={classNames(
          s.burgerButton,
          openBurger ? s.burgerMenuIsOpen : s.burgerMenuIsClose
        )}
        onClick={() => setOpenBurger(!openBurger)}
      >
        <MenuIcon fontSize="large" />
      </div>
      <ul
        className={classNames(
          s.nav__list,
          openBurger ? s.openListBurger : s.closeListBurger
        )}
      >
        {routesForGuest &&
          routesForGuest.map((route, index) => (
            <li key={index} className={s.nav__list__item}>
              <Link onClick={() => setOpenBurger(!openBurger)} to={route.path}>
                {route.title}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Navbar;
