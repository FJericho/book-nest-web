import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getBookById } from "../../service/bookService";
import Breadcrumb from "../../components/utils/Breadcrumb";
import BookDetail from "../../components/book/BookDetail";

export default function BookDetailPage() {
    const dispatch = useDispatch();
    const location = useLocation();

    const isLoading = useSelector((state) => state.loading.isLoading);

    const [book, setBook] = useState({
        title: "",
        author: "",
        publication: 0,
        genre: "",
        created_at: "",
    });

    const breadcrumbItems = [
        { label: "Books", path: "/books" },
        { label: "Detail Book", active: true },
    ];

    useEffect(() => {
        const id = location.pathname.split("/")[2];

        const fetchBook = async () => {
            const response = await dispatch(getBookById(id));
            setBook(response);
        };
        fetchBook();
    }, [dispatch, location.pathname]);

    return (
        <div>
            <h2 className="mb-3">Detail Book</h2>
            <Breadcrumb items={breadcrumbItems} />
            <div className="mt-3">
                <BookDetail data={book} isLoading={isLoading} />
            </div>
        </div>
    );
}
