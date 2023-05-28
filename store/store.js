import { configureStore } from "@reduxjs/toolkit";
import wishlist from "./wishlistSlice";

const store = configureStore({
  reducer: {
    wishlist,
  },
});

export default store;
