import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/CartSlice.js";

export default configureStore({
  reducer: {cart:cartReducer
  }
})