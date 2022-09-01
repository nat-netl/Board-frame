import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/card";

interface cardState {
  card: IProduct[];
  isLoading: boolean;
  error: string | null;
}

const initialState: cardState = {
  card: [],
  isLoading: false,
  error: "",
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: { },
  // extraReducers: {
  //   [fetchProducts.fulfilled.type]: (state, action:PayloadAction<IProduct[]>) => {
  //     state.isLoading = false;
  //     state.card = action.payload
  //     state.error = null;
  //   },
  //   [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
  //     state.error = ''
  //     state.error = action.payload
  //   },
  //   [fetchProducts.pending.type]: (state) => {
  //     state.isLoading = true;
  //   }
  // }
});

export default cardSlice.reducer;
