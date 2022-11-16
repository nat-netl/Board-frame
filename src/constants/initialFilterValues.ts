import { IAvalibility, IBrands } from "../types/filters";

export const InitialFiltersByIAvalibility: IAvalibility[] = [
  { id: 0, typeFilterByInStock: "В наличии", booleanValue: true },
  { id: 1, typeFilterByInStock: "Нет в наличие", booleanValue: false },
];

export const InitialFiltersByBrands: IBrands[] = [
  { id: 0, brand: 'Ducky' },
  { id: 1, brand: 'Varmilo' },
];