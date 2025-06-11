import { Link, redirect, useNavigate } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loginUser } from "../../service/authService";

export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoading = useSelector((state) => state.loading.isLoading);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const [formData, setFormData] = useState({
        email: "",
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
        dispatch(loginUser(formData, navigate));
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
                        <h3 className="card-title text-center text-primary mb-3">Welcome to Book Nest</h3>
                        <p className="text-center text-muted mb-4">Please Login to your account</p>

                        <LoginForm formData={formData} onSubmit={handleSubmit} onChange={handleChange} isLoading={isLoading} />

                        <div className="text-center mt-3">
                            <span className="text-muted">Don't have an account? </span>
                            <Link to="/register" className="text-decoration-none text-primary">
                                Register
                            </Link>
                        </div>

                        <div className="text-center mt-4">
                            <p className="text-muted small">By login, you agree to our Terms of Service and Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
