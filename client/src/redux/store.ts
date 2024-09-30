import { configureStore } from "@reduxjs/toolkit";
import { cartsApi } from "./services/cart.services";
import { productApi } from "./services/product.services";
import { paymentsApi } from "./services/payment.services";
import { searchsApi } from "./services/search.services";

export const store = configureStore({
  reducer: {
    [cartsApi.reducerPath]: cartsApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [paymentsApi.reducerPath]: paymentsApi.reducer,
    [searchsApi.reducerPath]: searchsApi.reducer,
  },

  middleware: (getDefaultMiddleware): any => {
    return getDefaultMiddleware({}).concat([
      cartsApi.middleware,
      productApi.middleware,
      paymentsApi.middleware,
      searchsApi.middleware,
    ]);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
