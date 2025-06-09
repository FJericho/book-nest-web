import React, { useState } from "react";
import Breadcrumb from "../../components/utils/Breadcrumb";
import BookForm from "../../components/book/BookForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBook } from "../../service/bookService";

export default function BookFormPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoading = useSelector((state) => state.loading.isLoading);

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        publication: "",
        genre: "",
    });

    const breadcrumbItems = [
        { label: "Books", path: "/books" },
        { label: "Add Book", active: true },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        const payload = {
            title: formData.title,
            author: formData.author,
            publication: parseInt(formData.publication, 10),
            genre: formData.genre,
        };
        dispatch(createBook(payload));
        navigate("/books");
    };

    return (
        <div className="p-4">
            <h2 className="mb-3">{"Add Book"}</h2>
            <Breadcrumb items={breadcrumbItems} />
            <BookForm onChange={handleChange} onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
    );
}
