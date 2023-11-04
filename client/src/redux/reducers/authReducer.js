import { createSlice } from "@reduxjs/toolkit";
const access_token = localStorage.getItem("access_token");
const initialState = {
  accessTokenAdmin: access_token ? access_token : null,
  accessTokenUser: "",
  isAuthentication: false,
};

export const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessTokenAdmin = action?.payload?.access_token;
      state.isAuthentication = true;
    },
    setAccessTokenUser: (state, action) => {
      state.accessTokenUser = action?.payload?.access_token;
      // state.isAuthentication = true;
    },
  },
});
export const { setAccessToken, setAccessTokenUser } = authSlice.actions;

export default authSlice.reducer;
