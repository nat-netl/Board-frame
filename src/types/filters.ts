export interface IAvalibility {
  id?: number;
  typeFilterByInStock?: string;
  booleanValue?: boolean;
}

export interface IBrand {
  id?: number,
  brand?: string,
}

export interface IProductFilters {
  brand?: string | undefined,
  inStock?: boolean | string | undefined 
}
