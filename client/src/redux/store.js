import { configureStore } from "@reduxjs/toolkit";
import { authJson } from "../service/authJson";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./reducers/authReducer";
import { categoryService } from "../service/categoryService";
export const store = configureStore({
  reducer: {
    [authJson.reducerPath]: authJson.reducer,
    [categoryService.reducerPath]: categoryService.reducer,
    authReducer: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authJson.middleware)
      .concat(categoryService.middleware),
});
setupListeners(store.dispatch);
