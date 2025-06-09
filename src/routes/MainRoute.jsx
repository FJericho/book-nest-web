import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import MainPage from "../pages/dashboard/MainPage";
import BookPage from "../pages/book/BookPage";
import BookFormPage from "../pages/book/BookFormPage";
import BookDetailPage from "../pages/book/BookDetailPage";

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/",
        element: <ProtectedRoute />,
        children: [
            {
                path: "",
                element: <MainPage />,
                children: [
                    {
                        path: "books",
                        element: <BookPage />,
                    },
                    {
                        path: "books/add",
                        element: <BookFormPage />,
                    },
                    {
                        path: "books/:id",
                        element: <BookDetailPage />,
                    },
                ],
            },
        ],
    },
]);

export default MainRoute;
