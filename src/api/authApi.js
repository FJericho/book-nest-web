import api from "./axiosInstance";

const authApi = {
    register: async (Payload) => {
        const response = await api.post("api/v1/register", Payload);
        return response.data;
    },
    login: async (Payload) => {
        const response = await api.post("api/v1/login", Payload);
        return response.data;
    },
};

export default authApi;
