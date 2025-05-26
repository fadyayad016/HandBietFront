import baseApi from "./baseQuery";

const favouriteApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Add item to cart (POST)
    addToFavourite: builder.mutation({
      query: (mealId) => ({
        url: `meals/favorites/${mealId}`,
        method: "POST",
      }),
      invalidatesTags: ["favourite"], // Invalidate cache to refresh cart data
    }),

    // Get cart items (GET)
    getFavourite: builder.query({
      query: () => "meals/favorites",
      providesTags: ["favourite"], // Cache cart data
      keepUnusedDataFor: 5, // Keep cached data for 5 seconds
    }),

    // Delete item from cart (DELETE)
    deleteFavourite: builder.mutation({
      query: (mealId) => ({
        url: `meals/favorites/${mealId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["favourite"], // Invalidate cache to refresh cart data
    }),
  }),
});

export const {
  useAddToFavouriteMutation,
  useGetFavouriteQuery,
  useDeleteFavouriteMutation,
} = favouriteApi;

export default favouriteApi;
