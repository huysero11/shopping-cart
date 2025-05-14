import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice/cartSlice.jsx";
import productsSlice from "../slices/productsSlice/productsSlice.jsx";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
