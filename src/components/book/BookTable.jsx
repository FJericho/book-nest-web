import React from "react";
import { Link } from "react-router-dom";

export default function BookTable(props) {
    const { books, isLoading } = props;

    return (
        <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Book List</h5>
            </div>
            <div className="card-body">
                {/* Search Form */}
                <div className="d-flex justify-content-between mb-3">
                    <div></div>
                    <div>
                        <Link to={"add"}>
                            <button className="btn btn-outline-primary">
                                Add <i className="bi bi-plus"></i>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Table */}
                <div className="table-responsive rounded">
                    <table className="table table-bordered table-striped">
                        <thead className="table-secondary">
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Genre</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                <tr>
                                    <td colSpan={5}>
                                        <div className="text-center">
                                            <div className="spinner-border" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ) : books != null ? (
                                books.map((book, index) => (
                                    <tr key={book.id}>
                                        <td>{index + 1}</td>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.genre}</td>
                                        <td className="d-flex gap-2">
                                            <Link to={`/books/${book.id}`}>
                                                <button className="btn btn-sm btn-outline-primary">
                                                    <i className="bi bi-eye"></i>
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center text-muted">
                                        No Books found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                <span>{/* Total Data: <span className="badge bg-dark">{totalData}</span> */}</span>
                {/* <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} /> */}
            </div>
        </div>
    );
}
