import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/productsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    products: productsReducer,
  }
});