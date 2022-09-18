import { IProduct } from "./product";

export interface BasketState {
  basket: IProduct[];
  isLoading?: boolean;
  error?: string | null;
}