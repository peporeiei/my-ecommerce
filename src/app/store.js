import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import counterReducer from "../features/counter/counterSlice";
import getProduct from "../reducer/ProductReducer";
import shopingCartReducer from "../reducer/ShopingCartReducer";
import wishListReducer from "../reducer/WishListReducer"

export const store = configureStore(
  {
    reducer: {
      counter: counterReducer,
      production_list: getProduct,
      shoping_cart: shopingCartReducer,
      wish_list : wishListReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }),
  },
  applyMiddleware(thunk)
);
