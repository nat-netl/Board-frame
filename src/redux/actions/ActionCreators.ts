import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants/baseUrl";
import { IProduct } from "../../types/card";

// export const fetchProducts = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(cardFetching())
//     const response = await axios.get<IProduct[]> (BASE_URL + 'products')
//     dispatch(cardFetchingSuccess(response.data))
//   } catch (e:any) {
//     dispatch(cardFetchingError(e.message))
//   }
// }

// export const fetchProducts = createAsyncThunk(
//   "products",
//   async (_, thunkApi) => {
//     const response = await axios.get<IProduct[]>(BASE_URL + "products");
//     return response.data;
//   }
// );
