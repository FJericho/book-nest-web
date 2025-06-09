import React, { useEffect } from "react";
import BookTable from "../../components/book/BookTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBooks } from "../../service/bookService";

export default function BookPage() {
    const dispatch = useDispatch();

    const isLoading = useSelector((state) => state.loading.isLoading);
    const books = useSelector((state) => state.books.items);

    const fetchData = async () => {
        await dispatch(fetchAllBooks());
    };

    useEffect(() => {
        fetchData();
    }, [dispatch]);

    return (
        <>
            <h2 className="mb-4">Books Management</h2>
            <BookTable books={books} isLoading={isLoading} />
        </>
    );
}
