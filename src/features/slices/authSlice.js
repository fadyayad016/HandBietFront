import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload?.user;
      state.accessToken = action.payload?.accessToken;
      state.refreshToken = action.payload?.refreshToken;

      localStorage.setItem("refreshToken", action.payload.refreshToken);
      localStorage.setItem("accessToken", action.payload.accessToken);
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;

      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
