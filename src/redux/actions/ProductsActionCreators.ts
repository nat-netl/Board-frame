import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants/baseUrl";
import { IBrand } from "../../types/brand";
import { IProduct } from "../../types/product";

// export const fetchProducts = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(cardFetching())
//     const response = await axios.get<IProduct[]> (BASE_URL + 'products')
//     dispatch(cardFetchingSuccess(response.data))
//   } catch (e:any) {
//     dispatch(cardFetchingError(e.message))
//   }
// }

export const fetchProducts = createAsyncThunk(
  "products",
  async ({brand}: IBrand, thunkApi) => {
    try {
      const response = await axios.get<IProduct[]>(`${BASE_URL}products`, {
        params: {
          brand_like: brand,
        },
      });
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue("Не удалось загрузить товары");
    }
  }
);

export const fetchProductsById = createAsyncThunk(
  "productsById",
  async (id: number | string, thunkApi) => {
    try {
      const response = await axios.get<IProduct[] | undefined>(
        `${BASE_URL}products`,
        {
          params: {
            id_like: id,
          },
        }
      );
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue("Не удалось загрузить товары");
    }
  }
);
