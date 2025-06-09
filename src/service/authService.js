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
            };

            const authData = {
                user: user,
                token: data.token,
            };

            dispatch(login(authData));

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(user));

            navigate("/books");
        } catch (error) {
            alert(error.response.data.errors);
            return;
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
            alert("Register Successfully");
            navigate("/login");
        } catch (error) {
            alert(error.response.data.errors);
            return;
        } finally {
            dispatch(stopLoading());
        }
    };
};
