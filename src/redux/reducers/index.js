import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";

const reducer = combineReducers({
  counter: counterSlice,
});

export default reducer;
