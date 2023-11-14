import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
