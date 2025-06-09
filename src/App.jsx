import { RouterProvider } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";

function App() {
    return <RouterProvider router={MainRoute} />;
}

export default App;
