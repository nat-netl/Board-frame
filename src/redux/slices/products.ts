import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/product";
import { fetchProducts, fetchProductsById } from "../actions/ActionCreators";

interface productsState {
  products: IProduct[];
  isLoading: boolean;
  error: string | null;
}

const initialState: productsState = {
  products: [],
  isLoading: false,
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: { },
  extraReducers: {
    [fetchProducts.fulfilled.type]: (state, action:PayloadAction<IProduct[]>) => {
      state.isLoading = false;
      state.products = action.payload
      state.error = null;
    },
    [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = ''
      state.error = action.payload
      state.isLoading = false;
    },
    [fetchProducts.pending.type]: (state) => {
      state.isLoading = true;
    },
    
    [fetchProductsById.fulfilled.type]: (state, action:PayloadAction<IProduct[]>) => {
      state.isLoading = false;
      state.products = action.payload
      state.error = null;
    },
    [fetchProductsById.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = ''
      state.error = action.payload
      state.isLoading = false;
    },
    [fetchProductsById.pending.type]: (state) => {
      state.isLoading = true;
    },
  }
});

export default productsSlice.reducer;
