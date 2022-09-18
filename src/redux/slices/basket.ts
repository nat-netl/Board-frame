import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketState } from "../../types/basket";
import { IProduct } from "../../types/product";

const initialState: BasketState = {
  basket: [],
  isLoading: false,
  error: "",
};

export const getBasketTotal = (basket: BasketState[]) => 
  basket?.reduce((amount, item:any) => item.price + amount, 0 ) ;

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<IProduct[]>) => {
      state.basket = [...state.basket, ...action.payload];
    },
    removeFromBasket: (state, action) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload.id);
    }
  },
});

export const cardSelector = {
  getBasket: (state: any) => state.basket,
};
export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
