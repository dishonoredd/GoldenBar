import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { counterSlice } from "./counter-slice";

export const store = configureStore({
    reducer: combineReducers({
        counterReducer: counterSlice.reducer,
    }),
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// function sum(): string {
//     return 0;
// }

// type Result = ReturnType<typeof sum>;

// type User = {
//     name: string;
//     city: string;
//     age: string;

//     sayHello: () => string;
// };

// const user1: User = {
//     age: "",
//     city: "",
//     name: "",
//     sayHello() {
//         return "Hello";
//     },
// };

// type User2 = Partial<User>;
