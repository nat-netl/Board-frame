import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/product";
import { fetchBrands } from "../actions/FilterActionCreators";

interface filtersState {
  filter: IProduct[];
  isLoading: boolean;
  error: string | null;
}

const initialState: filtersState = {
  filter: [],
  isLoading: false,
  error: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: { },
  extraReducers: {
    [fetchBrands.fulfilled.type]: (state, action:PayloadAction<IProduct[]>) => {
      state.isLoading = false;
      state.filter = action.payload
      state.error = null;
    },
    [fetchBrands.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = ''
      state.error = action.payload
      state.isLoading = false;
    },
    [fetchBrands.pending.type]: (state) => {
      state.isLoading = true;
    },
  }
});

export default filtersSlice.reducer;
