import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "../../components/auth/RegisterForm";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../service/authService";

export default function RegisterPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loading.isLoading);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(formData, navigate));
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/books");
        }
    }, [isAuthenticated, navigate]);

    return (
        <>
            <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
                <div className="card shadow border-0" style={{ width: "100%", maxWidth: "400px" }}>
                    <div className="card-body p-4">
                        <h3 className="card-title text-center text-primary mb-3">Create an Account</h3>
                        <p className="text-center text-muted mb-4">Please fill in the details below</p>

                        <RegisterForm formData={formData} onSubmit={handleSubmit} onChange={handleChange} isLoading={isLoading} />

                        <div className="text-center mt-3">
                            <span className="text-muted">Already have an account? </span>
                            <Link to="/login" className="text-decoration-none text-primary">
                                Login
                            </Link>
                        </div>

                        <div className="text-center mt-4">
                            <p className="text-muted small">By registering, you agree to our Terms of Service and Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
