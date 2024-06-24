import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productAPI } from "../services/ProductService";
import basketSlice from "../slices/basket";
import productsSlice from "../slices/products";

const reducers = {
  basket: basketSlice,
  card: productsSlice,
  [productAPI.reducerPath]: productAPI.reducer,
};

const rootReducer = combineReducers({
  ...reducers,
});

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productAPI.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export default setupStore;
