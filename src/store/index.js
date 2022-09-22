import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/CartSlice.js";
import { userReducer } from "./reducers/userSlice";

export default configureStore({
  reducer: {cart: cartReducer,
            user: userReducer
  }
})