import baseApi from "./baseQuery";

export const mealsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMeals: builder.query({
      query: () => "meals/",
    }),
  }),
});

export const { useGetMealsQuery } = mealsApi;
