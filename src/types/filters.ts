export interface IAvalibility {
  id?: number;
  typeFilterByInStock?: string;
  booleanValue?: boolean;
}

export interface IBrand {
  id?: number;
  brand?: string;
}

export interface IProductFilters {
  brand?: string | undefined;
  inStock?: boolean | string | undefined;
}

export interface IFilterState extends IProductFilters {
  filter: IProductFilters;
  setFilter: (value: IProductFilters) => void;
}

export interface IFilteredByAll extends IProductFilters {
  getFilteredByAll: (value: IProductFilters) => void;
}

export interface IFilterRoutes {
  id: number;
  component: JSX.Element;
}
