import React, {FC} from "react";
import { Link } from "react-router-dom";
import s from "./moreLink.module.scss";

interface IMoreLink {
  children: string,
  link: string
}

const MoreLink: FC<IMoreLink> = ({children, link, ...props}) => {
  return <Link className={s.btn__link} to={link}>{children}</Link>;
};

export default MoreLink;
