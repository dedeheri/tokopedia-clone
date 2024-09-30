import { ICreateCart } from "@/types/carts.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartsApi = createApi({
  reducerPath: "carts",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL as string,
  }),

  tagTypes: ["Cart"],

  endpoints: (builder) => ({
    fetchCart: builder.query<any, string>({
      query: (id) => `/cart/${id}`,
      providesTags: ["Cart"],
    }),

    createCart: builder.mutation<ICreateCart, Partial<ICreateCart>>({
      query: (data) => ({
        url: "/cart/add",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["Cart"],
    }),
  }),
});

export const { useFetchCartQuery, useCreateCartMutation } = cartsApi;
