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
    addedToBasket: (state: any) => {
      state.basket = state.basket.find((item: any) => item.id === state.payload);
    },
  },
});

export const cardSelector = {
  getBasket: (state: any) => state.basket,
};
export const { addToBasket, addedToBasket } = basketSlice.actions;
export default basketSlice.reducer;
