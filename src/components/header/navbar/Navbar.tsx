import React, { useState } from "react";
import s from "./navbar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import classNames from "classnames";
import NavRoutes from "../../ui/navRoutes/NavRoutes";

const Navbar = () => {
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
        <NavRoutes openBurger={openBurger} setOpenBurger={setOpenBurger} />
      </ul>
    </nav>
  );
}

export default Navbar