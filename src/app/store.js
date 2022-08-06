import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import reducer from '../reducer/ProductReducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    production_list : reducer
  },
});
