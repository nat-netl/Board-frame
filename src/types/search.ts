import { IProductFilters } from "./filters";

export interface ISearch extends IProductFilters {
  name?: string | undefined;
}