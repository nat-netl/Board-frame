import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../../types/card";

interface BasketState {
  basket: ICard[],
  isLoading: boolean,
  error: string,
}

const initialState:BasketState = {
  basket: [],
  isLoading: false,
  error: ''
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<ICard[]>) => {
      state.basket = [...state.basket, ...action.payload];
    },
  },
});

export const cardSelector = {
  getBasket: (state: any) => state.basket,
};
export const { addToBasket } = basketSlice.actions;
export default basketSlice.reducer;