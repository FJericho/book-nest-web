import { toast } from "react-toastify";
import authApi from "../api/authApi";
import { login } from "../store/slice/authSlice";
import { startLoading, stopLoading } from "../store/slice/loadingSlice";

export const loginUser = (payload, navigate) => {
    return async (dispatch) => {
        dispatch(startLoading());
        try {
            const { data } = await authApi.login(payload);

            const user = {
                email: payload.email,
                name: null,
            };

            const authData = {
                user: user,
                token: data.token,
            };

            // Decode token
            const tokenParts = data.token.split(".");
            if (tokenParts.length === 3) {
                const decodedPayload = JSON.parse(atob(tokenParts[1]));
                user.name = decodedPayload.name || [];
            }

            dispatch(login(authData));

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(user));

            navigate("/books");
        } catch (error) {
            if (error.response.status === 401 || error.response.status == 400) {
                toast.error(error.response?.data?.errors);
                return;
            }
            toast.error("Login failed");
        } finally {
            dispatch(stopLoading());
        }
    };
};

export const registerUser = (payload, navigate) => {
    return async (dispatch) => {
        dispatch(startLoading());
        try {
            await authApi.register(payload);
            toast.success("Register successfully");
            navigate("/login");
        } catch (error) {
            toast.error(error.response?.data?.errors);
            return;
        } finally {
            dispatch(stopLoading());
        }
    };
};
