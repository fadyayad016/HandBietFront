import baseApi from "./baseQuery";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Add item to cart (POST)
    addToCart: builder.mutation({
      query: ({ mealId, quantity }) => ({
        url: "cart",
        method: "POST",
        body: { mealId, quantity },
      }),
      invalidatesTags: ["Cart"], // Invalidate cache to refresh cart data
    }),

    // Get cart items (GET)
    getCart: builder.query({
      query: () => "cart",
      providesTags: ["Cart"], // Cache cart data
      keepUnusedDataFor: 5, // Keep cached data for 5 seconds
    }),

    // Update cart item quantity (PUT)
    updateCartItem: builder.mutation({
      query: ({ mealId, quantity }) => ({
        url: "cart",
        method: "PUT",
        body: { mealId, quantity },
      }),
      invalidatesTags: ["Cart"], // Invalidate cache to refresh cart data
    }),

    // Delete item from cart (DELETE)
    deleteCartItem: builder.mutation({
      query: (mealId) => ({
        url: `cart/${mealId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"], // Invalidate cache to refresh cart data
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartQuery,
  useUpdateCartItemMutation,
  useDeleteCartItemMutation,
} = cartApi;

export default cartApi;
