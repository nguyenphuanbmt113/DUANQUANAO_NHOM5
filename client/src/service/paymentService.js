import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const paymentService = createApi({
  reducerPath: "payment",
  tagTypes: "payment",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/api/v1/payment",
    // prepareHeaders: (headers, { getState }) => {
    //   const accessTokenAdmin = getState().authReducer.accessTokenAdmin;
    //   if (accessTokenAdmin) {
    //     headers.set("authorization", `Bearer ${accessTokenAdmin}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    sendPayment: builder.mutation({
      query: (cart) => {
        return {
          url: `/create-checkout-session`,
          method: "POST",
          body: cart,
        };
      },
      invalidatesTags: ["payment"],
    }),
  }),
});

export const { useSendPaymentMutation } = paymentService;