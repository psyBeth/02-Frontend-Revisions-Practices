import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import newsReducer from "../features/newApiSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        newsApi: newsReducer
    },
    devTools: process.env.NODE_ENV !== "production",
    //? if production phase, then the above expression returns false and therefore the devTool is unavailable.
})