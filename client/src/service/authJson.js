import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authJson = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/api/v1/user",
  }),
  endpoints: (builder) => ({
    createLogin: builder.mutation({
      query: (data) => {
        return {
          url: `/login`,
          method: "POST",
          body: data,
        };
      },
    }),
    forgotPassword: builder.mutation({
      query: (data) => {
        return {
          url: `/forgotPassword`,
          method: "POST",
          body: data,
        };
      },
    }),
    resetPassword: builder.mutation({
      query: (data) => {
        return {
          url: `/resetpassword`,
          method: "PUT",
          body: data,
        };
      },
    }),
    createLoginUser: builder.mutation({
      query: (data) => ({
        url: `/login-user`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `/register`,
        method: "POST",
        body: data,
      }),
    }),
    getUsers: builder.query({
      query: (data) => ({
        url: `/get-users`,
        method: "GET",
        params: data,
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateLoginMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useRegisterMutation,
  useCreateLoginUserMutation,
} = authJson;
