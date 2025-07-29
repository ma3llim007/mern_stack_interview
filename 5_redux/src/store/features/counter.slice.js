import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase: (state, action) => {
            state.value += 1;
        },
        descrease: (state, action) => {
            if (state.value > 0) {
                state.value -= 1;
            }
        },
        reset: (state, action) => {
            state.value = 0;
        },
    },
});

export const { increase, descrease, reset } = counterSlice.actions;

export default counterSlice;
