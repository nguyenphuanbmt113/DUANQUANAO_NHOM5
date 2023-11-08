import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authJson } from "../service/authJson";
import { categoryService } from "../service/categoryService";
import { productService } from "../service/productService";
import authReducer from "./reducers/authReducer";
import cartReducer from "./reducers/cartReducer";
import globalReducer from "./reducers/globalReducer";
export const store = configureStore({
  reducer: {
    [authJson.reducerPath]: authJson.reducer,
    [categoryService.reducerPath]: categoryService.reducer,
    [productService.reducerPath]: productService.reducer,
    authReducer: authReducer,
    globalReducer: globalReducer,
    cartReducer: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authJson.middleware)
      .concat(categoryService.middleware)
      .concat(productService.middleware),
});
setupListeners(store.dispatch);
