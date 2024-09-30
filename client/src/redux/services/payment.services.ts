import { IPayment } from "@/types/payment.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const paymentsApi = createApi({
  reducerPath: "payments",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL as string,
  }),

  tagTypes: ["Payment"],

  endpoints: (builder) => ({
    fetchPayment: builder.query<IPayment, string>({
      query: (id) => `/payment/${id}`,
      providesTags: ["Payment"],
    }),

    createPayment: builder.mutation<any, any>({
      query: (data) => ({
        url: "/payment/add",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["Payment"],
    }),
  }),
});

export const { useFetchPaymentQuery, useCreatePaymentMutation } = paymentsApi;
