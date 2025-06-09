import bookApi from "../api/bookApi";
import { setBooks } from "../store/slice/bookSlice";
import { startLoading, stopLoading } from "../store/slice/loadingSlice";

export const fetchAllBooks = () => {
    return async (dispatch) => {
        dispatch(startLoading());
        try {
            const { data } = await bookApi.getAllBooks();
            dispatch(setBooks(data));
        } catch (error) {
            alert("Failed to fetch Books");
        } finally {
            dispatch(stopLoading());
        }
    };
};

export const getBookById = (id) => {
    return async (dispatch) => {
        dispatch(startLoading());
        try {
            const book = await bookApi.getBookById(id);
            return book.data;
        } catch (error) {
            alert("Failed to fetch book");
        } finally {
            dispatch(stopLoading());
        }
    };
};

export const createBook = (payload) => {
    return async (dispatch) => {
        dispatch(startLoading());
        try {
            await bookApi.createBook(payload);
            alert("Book created successfully");
        } catch (error) {
            alert("Failed to create book");
        } finally {
            dispatch(stopLoading());
        }
    };
};
