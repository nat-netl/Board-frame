export interface IRoutesForGuest {
  path: string;
  title: string;
  consider: boolean;
}

export interface IPrivateRoutes {
  path: string;
  element: JSX.Element;
}
