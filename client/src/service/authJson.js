import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authJson = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/api/v1/user",
  }),
  endpoints: (builder) => ({
    createLogin: builder.mutation({
      query: (data) => ({
        url: `/login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateLoginMutation } = authJson;
