import React, { useState } from "react";

export default function BookForm(props) {
    const { onChange, onSubmit, isLoading } = props;

    const [formError, setFormError] = useState({});

    const validate = (name, value) => {
        const errors = { ...formError };

        if (name === "title") {
            if (!value.trim()) {
                errors.title = "Title is required";
            } else {
                delete errors.title;
            }
        }

        if (name === "author") {
            if (!value.trim()) {
                errors.author = "Author is required";
            } else {
                delete errors.author;
            }
        }

        if (name === "publication") {
            const year = parseInt(value.trim(), 10);

            if (!value.trim()) {
                errors.publication = "Publication Year is required";
            } else if (isNaN(year)) {
                errors.publication = "Publication Year must be a valid number";
            } else {
                delete errors.publication;
            }
        }

        if (name === "genre") {
            if (!value.trim()) {
                errors.genre = "Genre is required";
            } else {
                delete errors.genre;
            }
        }

        setFormError(errors);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange(e);
        validate(name, value);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validate(name, value);
    };

    return (
        <div className="card border-primary shadow-sm">
            <div className="card-header bg-primary text-white d-flex align-items-center">
                <i className="bi bi-box-seam me-2 fs-5"></i>
                <h5 className="mb-0">Book Form</h5>
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}
            >
                <div className="card-body">
                    {isLoading ? (
                        <div className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div>
                            {/* Title */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">
                                    <i className="bi bi-file-earmark-text me-2 text-primary"></i>
                                    Title
                                </label>
                                <input type="text" className={`form-control ${formError.title ? "is-invalid" : ""}`} placeholder="Enter title" name="title" onChange={handleChange} onBlur={handleBlur} required />
                                <div className="d-flex justify-content-between align-items-center mt-1">{formError.title ? <div className="text-danger small">{formError.title}</div> : <div></div>}</div>
                            </div>

                            {/* Author */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">
                                    <i className="bi bi-person me-2 text-success"></i>
                                    Author
                                </label>
                                <input type="text" className={`form-control ${formError.author ? "is-invalid" : ""}`} placeholder="Enter author" name="author" onChange={handleChange} onBlur={handleBlur} required />
                                <div className="d-flex justify-content-between align-items-center mt-1">{formError.author ? <div className="text-danger small">{formError.author}</div> : <div></div>}</div>
                            </div>

                            {/* Publication Year */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">
                                    <i className="bi bi-calendar me-2 text-warning"></i>
                                    Publication Year
                                </label>
                                <input type="number" className={`form-control ${formError.publication ? "is-invalid" : ""}`} placeholder="Enter publication year" name="publication" onChange={handleChange} onBlur={handleBlur} required />
                                <div className="d-flex justify-content-between align-items-center mt-1">{formError.publication ? <div className="text-danger small">{formError.publication}</div> : <div></div>}</div>
                            </div>

                            {/* Genre */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">
                                    <i className="bi bi-tags me-2 text-info"></i>
                                    Genre
                                </label>
                                <input type="text" className={`form-control ${formError.genre ? "is-invalid" : ""}`} placeholder="Enter genre" name="genre" onChange={handleChange} onBlur={handleBlur} required />
                                <div className="d-flex justify-content-between align-items-center mt-1">{formError.genre ? <div className="text-danger small">{formError.genre}</div> : <div></div>}</div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="card-footer d-flex justify-content-end gap-2">
                    <a href="/books" className="btn btn-outline-secondary">
                        <i className="bi bi-arrow-left"></i> Back
                    </a>
                    <button type="submit" className="btn btn-primary">
                        <i className="bi bi-save"></i> Save
                    </button>
                </div>
            </form>
        </div>
    );
}
