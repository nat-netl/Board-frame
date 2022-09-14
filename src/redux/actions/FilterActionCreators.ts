import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants/baseUrl";
import { IBrand } from "../../types/filters";

export const fetchBrands = createAsyncThunk(
  "filters",
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get<IBrand[]>(`${BASE_URL}brands`);
      return response.data;
    } catch (e) {
      return rejectWithValue("Не удалось загрузить товары");
    }
  }
);