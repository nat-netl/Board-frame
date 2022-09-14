import { Availability, Brands } from "../constants/initialFilterValues";

export interface IBrand {
  id?: number,
  brand?: string,
}

export interface IProductFilters {
  brand?: string | undefined,
  inStock?: boolean | string | undefined 
}

export interface IFiltersByAll {
  brand?: string;
  inStock?: boolean;
}

export const initialFilterValues = {
  availability: Availability,
  brands: Brands
}

export interface IFilterFormProps extends IFiltersByAll {
  getFilteredResult: (values: IFiltersByAll) => Promise<void>;
}