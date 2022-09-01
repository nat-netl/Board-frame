import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants/baseUrl";

export const productAPI = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    fetchAllProducts: build.query({
      query: () => ({
        url: "products",
      }),
    }),
  }),
});
