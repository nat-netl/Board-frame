import { IProduct } from "./product";

export interface IBaseBasket {
  id: number;
  brand: string;
  name: string;
  image?: string;
  big_image?: string;
  price: number;
  description?: string;
  instock?: boolean;
  amount: number | undefined;
}

export interface BasketState {
  basket: IBaseBasket[];
  isLoading?: boolean;
  error?: string | null;
}

export interface IQuantityState {
  quantity: number | undefined;
  setQuantity: (value: React.ChangeEvent<HTMLInputElement>) => void
}