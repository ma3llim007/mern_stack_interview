import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter.slice";

const store = configureStore({
    reducer: counterSlice.reducer,
});

export default store;
