import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  coin: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialStateValues,
  reducers: {
    increment: (state) => {
      state.coin += 1;
    },
    decrement: (state) => {
      state.coin -= 1;
    },
    incrementByAmount: (state, action) => {
      state.coin += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.coin -= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
