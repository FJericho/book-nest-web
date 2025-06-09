import api from "./axiosInstance";

const bookApi = {
    createBook: async (book) => {
        const response = await api.post("/api/v1/book/", book);
        return response.data;
    },
    getAllBooks: async () => {
        const response = await api.get("/api/v1/book/");
        return response.data;
    },
    getBookById: async (id) => {
        const response = await api.get(`/api/v1/book/${id}`);
        return response.data;
    },
};

export default bookApi;
