import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const categoryService = createApi({
  reducerPath: "category",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/api/v1/category",
    prepareHeaders: (headers, { getState }) => {
      const accessToken = getState().authReducer.accessToken;
      console.log("access_token:", accessToken);
      if (accessToken) {
        headers.set("authorization", `Bearer ${accessToken}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (data) => {
        console.log("data:", data);
        return {
          url: `/create`,
          method: "POST",
          body: { title: data },
        };
      },
    }),
  }),
});

export const { useCreateCategoryMutation } = categoryService;
