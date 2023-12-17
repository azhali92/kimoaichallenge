import { configureStore } from "@reduxjs/toolkit";
import homeDataSlice from "../features/home/homeDataSlice";

const store = configureStore({
    reducer: {
        home : homeDataSlice
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store