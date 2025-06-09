import React from "react";

export default function BookDetail(props) {
    const { data, isLoading } = props;

    const formatDate = (dateStr) => {
        const options = { year: "numeric", month: "long", day: "2-digit" };
        const date = new Date(dateStr);
        return date.toLocaleDateString("id-ID", options);
    };

    return (
        <div className="card border-primary shadow-sm">
            <div className="card-header bg-primary text-white d-flex align-items-center">
                <i className="bi bi-book me-2"></i>
                <h5 className="mb-0">Book Information</h5>
            </div>
            <div className="card-body">
                {isLoading ? (
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        {/* Bagian Kiri: Informasi Utama */}
                        <div className="border-end">
                            <div className="row mb-3">
                                <div className="col-4 d-flex align-items-center">
                                    <i className="bi bi-file-earmark-text me-2 text-primary"></i>
                                    <strong>Title</strong>
                                </div>
                                <div className="col-8">{data?.title}</div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-4 d-flex align-items-center">
                                    <i className="bi bi-person me-2 text-success"></i>
                                    <strong>Author</strong>
                                </div>
                                <div className="col-8">{data?.author}</div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-4 d-flex align-items-center">
                                    <i className="bi bi-calendar me-2 text-warning"></i>
                                    <strong>Publication Year</strong>
                                </div>
                                <div className="col-8">{data?.publication}</div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-4 d-flex align-items-center">
                                    <i className="bi bi-tags me-2 text-info"></i>
                                    <strong>Genre</strong>
                                </div>
                                <div className="col-8">{data?.genre}</div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-4 d-flex align-items-center">
                                    <i className="bi bi-calendar-event me-2 text-success"></i>
                                    <strong>Created At</strong>
                                </div>
                                <div className="col-8">
                                    <span className="badge bg-success">{formatDate(data.created_at)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="card-footer d-flex justify-content-end">
                <a href="/books" className="btn btn-outline-secondary me-2">
                    <i className="bi bi-arrow-left"></i> Back
                </a>
            </div>
        </div>
    );
}
