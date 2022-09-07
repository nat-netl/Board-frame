import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { routesForGuest } from '../../constants/navbar'
import s from './navRoutes.module.scss'

interface IRoutesProps {
  openBurger?: boolean,
  setOpenBurger?: any,
  title?: string
}

function NavRoutes({openBurger, setOpenBurger, title}: PropsWithChildren<IRoutesProps>) {
  return (
    <>
    {title && <h3>{title}</h3>}
    {routesForGuest &&
          routesForGuest.map((route, index) => (
            <li onClick={() => setOpenBurger(false)} key={index} className={s.nav__list__item}>
              <Link to={route.path}>
                {route.title}
              </Link>
            </li>
          ))}
    </>
  )
}

export default NavRoutes