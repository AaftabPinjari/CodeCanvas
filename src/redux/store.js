import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./slice/blogsSlice"

export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
    }
})