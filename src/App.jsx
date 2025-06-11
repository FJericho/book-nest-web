import { RouterProvider } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <>
            <RouterProvider router={MainRoute} />;
            <ToastContainer position="top-center" autoClose={3000} />
        </>
    );
}

export default App;
