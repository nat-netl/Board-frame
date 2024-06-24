import { IPrivateRoutes, IRoutesForGuest } from "../types/routes";
import Home from "../pages/home/Home";
import Keyboards from "../pages/keyboards/Keyboards";
import ProductIdCard from "../components/products/productIdCard/ProductIdCard";
import Basket from "../pages/basket/Basket";
import Search from "../pages/search/Search";
import Error from "../pages/error/Error";

export const homePath = "/";
export const keyboardsPath = "/keyboards";
export const searchPath = "/search";
export const basketPath = "/basket";

export const routesForGuest: IRoutesForGuest[] = [
  {
    path: keyboardsPath,
    title: "Клавиатуры",
    consider: true,
  },
  {
    path: homePath,
    title: "Популярные",
    consider: false,
  },
  {
    path: searchPath,
    title: "Поиск по товарам",
    consider: false,
  },
  {
    path: basketPath,
    title: "Корзина товаров",
    consider: false,
  },
];

export const privateRoutes: IPrivateRoutes[] = [
  { path: "/", element: <Home /> },
  { path: "/:id", element: <ProductIdCard /> },
  { path: "/keyboards", element: <Keyboards /> },
  { path: "/keyboards/:id", element: <ProductIdCard /> },
  { path: "/search", element: <Search /> },
  { path: "/search/:id", element: <ProductIdCard /> },
  { path: "/basket", element: <Basket /> },
  { path: "/error", element: <Error /> },
  { path: "*", element: <Error /> },
];
