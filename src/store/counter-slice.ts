import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counterSlice",
    initialState: {
        count: 0,
    },
    reducers: {
        increase: (state, action) => {
            state.count += action.payload;
        },
        decrease: (state, action) => {
            state.count -= action.payload;
        },
    },
});

export const { decrease, increase } = counterSlice.actions;

export const counterActions = counterSlice.actions;
