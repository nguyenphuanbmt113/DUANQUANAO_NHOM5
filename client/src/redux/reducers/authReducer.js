import { createSlice } from "@reduxjs/toolkit";
const access_token = localStorage.getItem("access_token");
const initialState = {
  accessToken: access_token ? access_token : null,
  isAuthentication: false,
};

export const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action?.payload?.access_token;
      state.isAuthentication = true;
    },
  },
});
export const { setAccessToken } = authSlice.actions;

export default authSlice.reducer;
