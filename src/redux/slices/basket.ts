import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBaseBasket } from "../../types/basket";

export interface IBasket {
  basket: IBaseBasket[];
  isLoading: boolean;
  error: string;
}

const initialState: IBasket = {
  basket: [],
  isLoading: false,
  error: "",
};

export const getTotalQuantityItemsBasket = (basket: IBaseBasket[]) => {
  let total = basket.reduce(
    (basketTotal, basketItem): any => {
      const { price, amount } = basketItem;
      if (amount) basketTotal.cost += price * amount;
      if (amount) basketTotal.quantity += amount;

      return basketTotal;
    },
    {
      cost: 0,
      quantity: 0,
    }
  );

  return total;
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state: IBasket, action: PayloadAction<IBaseBasket>) => {
      const basketItem = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (basketItem) {
        basketItem.amount && basketItem.amount++;
        console.log(basketItem.amount);
      } else {
        state.basket.push(action.payload);
      }
    },
    decreaseStuffQuantity: (
      state: IBasket,
      action: PayloadAction<IBaseBasket>
    ) => {
      const basketItem = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (basketItem) {
        basketItem.amount && basketItem.amount--;
      }
    },
    inputStuffQuantity: (
      state: IBasket,
      action: PayloadAction<IBaseBasket>
    ) => {
      const basketItem = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (basketItem) {
        basketItem.amount = action.payload.amount;
      }
    },
    removeFromBasket: (state: IBasket, action) => {
      state.basket = state.basket.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearBasket: (state: IBasket) => {
      state.basket = [];
    },
  },
});

export const cardSelector = {
  getBasket: (state: IBasket) => state.basket,
};
export const {
  addToBasket,
  removeFromBasket,
  decreaseStuffQuantity,
  inputStuffQuantity,
  clearBasket,
} = basketSlice.actions;
export default basketSlice.reducer;
