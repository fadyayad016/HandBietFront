import baseApi from "./baseQuery";

export const mealsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMeals: builder.query({
      query: () => "meals",
      providesTags: ["Meals"],
    }),
    getMeal: builder.query({
      query: (id) => `meals/${id}`,
      providesTags: ["Meals"],
    }),
  }),
});

export const { useGetMealsQuery, useGetMealQuery } = mealsApi;
