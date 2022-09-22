import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBaseBasket } from "../../types/basket";
import { IProduct } from "../../types/product";

interface IBasket {
  basket: IBaseBasket[];
  isLoading: boolean,
  error: string,
}

const initialState: IBasket = {
  basket: [],
  isLoading: false,
  error: "",
};

export const getBasketTotal = (basket: IBasket[]) =>
  basket?.reduce((amount, item: any) => item.price + amount, 0);

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state: IBasket, action: PayloadAction<IBaseBasket>) => {
      const basketItem = state.basket.find(item => item.id === action.payload.id)
      if (basketItem) {
        basketItem.amount && basketItem.amount++;
        console.log(basketItem.amount)
      } else {
        state.basket.push(action.payload)
      }
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
