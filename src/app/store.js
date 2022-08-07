import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import counterReducer from "../features/counter/counterSlice";
import getProduct from "../reducer/ProductReducer";
import shopingCartReducer from "../reducer/ShopingCartReducer";
import wishListReducer from "../reducer/WishListReducer"

import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'production_list',
  key: 'shoping_cart',
  storage,
};
const reducers = combineReducers({
  counter: counterReducer,
  production_list: getProduct,
  shoping_cart: shopingCartReducer,
  wish_list: wishListReducer
});
const persistedReducer = persistReducer(persistConfig, reducers);

export const history = createBrowserHistory()

export const store = configureStore(
  {
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  },
);