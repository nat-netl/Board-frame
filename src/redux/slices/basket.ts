import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/product";

interface BasketState {
  basket: IProduct[];
  isLoading: boolean;
  error: string | null;
}

const initialState: BasketState = {
  basket: [],
  isLoading: false,
  error: "",
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<IProduct[]>) => {
      state.basket = [...state.basket, ...action.payload];
    },
    
  },
});

export const cardSelector = {
  getBasket: (state: any) => state.basket,
};
export const { addToBasket } = basketSlice.actions;
export default basketSlice.reducer;
