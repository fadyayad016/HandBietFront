import { login } from "../slices/authSlice";
import baseApi from "./baseQuery";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: { ...credentials },
      }),
      onQueryStarted: async (credentials, { dispatch, queryFulfilled }) => {
        try {
          const result = await queryFulfilled;
          console.log("success login", result);
          console.log("test credentials", credentials);
          dispatch(
            login({
              accessToken: result.data.accessToken,
              refreshToken: result.data.refreshToken,
            })
          );
        } catch (err) {
          console.log("error login", err);
        }
      },
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "auth/register",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    getUser: builder.query({
      query: () => "user/getCurrentUser",
      providesTags: ["User"],
      keepUnusedDataFor: 5,
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const result = await queryFulfilled;
          dispatch(
            login({
              user: result.data.data,
              accessToken: localStorage.getItem("accessToken"),
              refreshToken: localStorage.getItem("refreshToken"),
            })
          );
        } catch (err) {
          console.log("error login", err);
        }
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useGetUserQuery,
} = authApi;

export default authApi;
