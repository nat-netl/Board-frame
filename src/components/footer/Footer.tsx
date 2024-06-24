import React from "react";
import m from "../../assets/styles/main.module.scss";
import NavRoutes from "../ui/navRoutes/NavRoutes";
import s from "./footer.module.scss";

const Footer = () => {
  const currentData = new Date().getFullYear() as number;

  return (
    <footer className={s.footer}>
      <div className={m.container}>
        <div className={s.footer__wrapper}>
          <div className={s.nav__rows}>
            <div className={s.nav__row}>
              <NavRoutes title="Магазин" />
            </div>
          </div>

          <div className={s.copyright}>
            <div className={s.text__copyright}>
              &copy; 2022 - {currentData} БордФрейм
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
