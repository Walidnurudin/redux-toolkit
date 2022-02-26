import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
// RTK query
import { setupListeners } from '@reduxjs/toolkit/query';
import { jsonApi } from '../services/json';

export const store = configureStore({
  reducer: {
    counter: counterReducer,

    // RTK query
    [jsonApi.reducerPath]: jsonApi.reducer,
  },

  middleware: (getDefaultMiddleqware) =>
    getDefaultMiddleqware().concat(jsonApi.middleware),
});

setupListeners(store.dispatch);
