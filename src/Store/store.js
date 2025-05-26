import { configureStore } from "@reduxjs/toolkit";
import baseApi from "../features/api/baseQuery";
import authReducer from "../features/slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
