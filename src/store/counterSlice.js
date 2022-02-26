import { createSlice } from '@reduxjs/toolkit';

const initState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
