import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../store/slice/authSlice";
import { toast } from "react-toastify";

export default function MainPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.auth.user);

    const sidebarMenus = [{ name: "Book", icon: "bi-book", path: "/books" }];

    const getNavLinkClass = (path) => {
        return location.pathname === path ? "nav-link active" : "nav-link link-body-emphasis";
    };

    const handleLogout = (e) => {
        dispatch(logout());
        toast.success("Logout successfully");
        navigate("/login");
    };

    return (
        <div className="d-flex vh-100 overflow-hidden">
            {/* Sidebar */}
            <div className="d-flex flex-column border-end flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "280px" }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <i className="bi bi-amd me-2 fs-2"></i>
                    <span className="fs-4">Book Nest</span>
                </a>
                <hr />

                <ul className="nav nav-pills flex-column mb-auto">
                    {sidebarMenus.map((menu) => (
                        <li key={menu.path}>
                            <Link to={menu.path} className={getNavLinkClass(menu.path)}>
                                <i className={`bi ${menu.icon} me-2`}></i>
                                {menu.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Profile */}
                <div className="mt-auto dropdown border-top pt-2">
                    <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <strong>{user?.name}</strong>
                    </a>
                    <ul className="dropdown-menu text-small shadow">
                        <li>
                            <a className="dropdown-item" href="#">
                                Profile
                            </a>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <button className="dropdown-item" onClick={handleLogout}>
                                Sign out
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow-1 overflow-auto p-5">
                <Outlet />
            </div>
        </div>
    );
}
