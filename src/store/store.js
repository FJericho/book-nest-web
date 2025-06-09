import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import loadingReducer from "./slice/loadingSlice";
import bookReducer from "./slice/bookSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        loading: loadingReducer,
        books: bookReducer,
    },
});

export default store;
