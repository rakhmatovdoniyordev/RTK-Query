import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { tokenSlice } from "./slice/tokenSlice";
import wishlistSlice from "./slice/wishlistSlice";

export const store = configureStore({
  reducer: {
    token: tokenSlice.reducer,
    wishlist: wishlistSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});