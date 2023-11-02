import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const categoryService = createApi({
  reducerPath: "category",
  tagTypes: "category",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/api/v1/category",
    prepareHeaders: (headers, { getState }) => {
      const accessToken = getState().authReducer.accessToken;
      if (accessToken) {
        headers.set("authorization", `Bearer ${accessToken}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (data) => {
        return {
          url: `/create`,
          method: "POST",
          body: { title: data },
        };
      },
      invalidatesTags: ["category"],
    }),
    getCategory: builder.query({
      query: (data) => {
        return {
          url: `/get-catequery?page=${data.page}`,
          method: "GET",
        };
      },
      providesTags: ["category"],
    }),
    putCategory: builder.mutation({
      query: (data) => {
        return {
          url: `/update/${data.id}`,
          method: "PUT",
          body: { title: data.input },
        };
      },
    }),
    deleteCategory: builder.mutation({
      query: (data) => {
        return {
          url: `/delete/${data.id}`,
          method: "DELETE",
        };
      },
    }),
    allCategory: builder.query({
      query: () => {
        return {
          url: `/all`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetCategoryQuery,
  useAllCategoryQuery,
  usePutCategoryMutation,
  useDeleteCategoryMutation,
} = categoryService;
