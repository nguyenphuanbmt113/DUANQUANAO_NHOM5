import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productService = createApi({
  reducerPath: "product",
  tagTypes: "product",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/api/v1/product",
    prepareHeaders: (headers, { getState }) => {
      const accessTokenAdmin = getState().authReducer.accessTokenAdmin;
      if (accessTokenAdmin) {
        headers.set("authorization", `Bearer ${accessTokenAdmin}`);
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
    putProduct: builder.mutation({
      query: (data) => {
        console.log("data update put len server :", data)
        return {
          url: `/update/${data.id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/delete/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["product"],
    }),
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

export const {
  useCreateProductMutation,
  useDeleteProductMutation,
  usePutProductMutation,
  useGetProductQuery,
  useGetProductByIdQuery,
} = productService;
