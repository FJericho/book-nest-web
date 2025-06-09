import React from "react";

export default function RegisterForm(props) {
    const { formData, onSubmit, onChange, isLoading } = props;

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={onChange} placeholder="Enter your name" required />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email Address
                </label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={onChange} placeholder="Enter your email" required />
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={onChange} placeholder="Enter your password" required />
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
                {isLoading ? (
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="spinner-border me-2" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        Loading...
                    </div>
                ) : (
                    "Register"
                )}
            </button>
        </form>
    );
}
