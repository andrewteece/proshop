import { apiSlice } from "./apiSlice.js";
import { ORDERS_URL } from "../constants.js";

export const ordersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      createOrder: builder.mutation({
        query: (order) => ({
          url: ORDERS_URL,
          method: 'POST',
          body: order,
        }),
      }),
      getOrderDetails: builder.query({
        query: (id) => ({
          url: `${ORDERS_URL}/${id}`,
        }),
        keepUnusedDataFor: 5,
      }),
    }),
  });
  
  export const { useCreateOrderMutation, useGetOrderDetailsQuery } = ordersApiSlice;