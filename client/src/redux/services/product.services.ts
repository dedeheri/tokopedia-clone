import { IProducts } from "@/types/products.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL as string,
  }),

  endpoints: (builder) => ({
    fetchProducts: builder.query<IProducts, void>({
      query: () => `/products`,
    }),

    fetchProductByStore: builder.query<IProducts, string>({
      query: (storeId: string) => `/products/store/${storeId}`,
    }),

    fetchDetailProducts: builder.query<IProducts, string>({
      query: (slug: string) => `/products/${slug}`,
    }),
  }),
});

export const {
  useFetchProductsQuery,
  useFetchProductByStoreQuery,
  useFetchDetailProductsQuery,
} = productApi;
