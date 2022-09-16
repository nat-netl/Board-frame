import { IRoutesForGuest } from "../types/navbarRoutes";

export const homePath = "/";
export const keyboardsPath = "/keyboards";

export const routesForGuest: IRoutesForGuest[] = [
  {
    path: keyboardsPath,
    title: "Клавиатуры",
    consider: true
  },
  {
    path: homePath,
    title: "Новинки",
    consider: false
  },
];
