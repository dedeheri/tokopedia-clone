import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchsApi = createApi({
  reducerPath: "searchs",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL as string,
  }),

  tagTypes: ["Searchs"],

  endpoints: (builder) => ({
    fetchSearch: builder.query({
      query: (query: string) => `/search/term?query=${query}`,
      providesTags: ["Searchs"],
    }),
  }),
});

export const { useFetchSearchQuery } = searchsApi;
