import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants/baseUrl";
import { IProduct } from "../../types/product";

export const productAPI = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    fetchAllProducts: build.query<IProduct[], number>({
      query: (limit: number = 0) => ({
        url: "products",
      }),
    }),
    fetchIdProduct: build.query<IProduct[], number>({
      query: (id = 0) => ({
        url: "products",
        params: {
          id_like: id
        }
      }),
    }),
  }),
});
