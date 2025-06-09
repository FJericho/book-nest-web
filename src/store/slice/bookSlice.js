import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.items = action.payload;
        },
    },
});

const bookReducer = bookSlice.reducer;

export const { setBooks } = bookSlice.actions;
export default bookReducer;
