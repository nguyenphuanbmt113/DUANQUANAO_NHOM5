import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productService = createApi({
  reducerPath: "product",
  tagTypes: "product",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/api/v1/product",
    prepareHeaders: (headers, { getState }) => {
      const accessToken = getState().authReducer.accessToken;
      if (accessToken) {
        headers.set("authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => {
        return {
          url: `/create`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
    getProduct: builder.query({
      query: (data) => {
        return {
          url: `/get-product?page=${data.page}`,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),
    getProductById: builder.query({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "GET",
        };
      }, 
      providesTags: ["product"],
    }),
    // putCategory: builder.mutation({
    //   query: (data) => {
    //     return {
    //       url: `/update/${data.id}`,
    //       method: "PUT",
    //       body: { title: data.input },
    //     };
    //   },
    // }),
    // deleteCategory: builder.mutation({
    //   query: (data) => {
    //     return {
    //       url: `/delete/${data.id}`,
    //       method: "DELETE",
    //     };
    //   },
    // }),
    // allCategory: builder.query({
    //   query: () => {
    //     return {
    //       url: `/all`,
    //       method: "GET",
    //     };
    //   },
    // }),
  }),
});

export const { useCreateProductMutation, useGetProductQuery, useGetProductByIdQuery } =
  productService;
