import axios from "axios";

export const API_HOST = "http://localhost:8080/api/";

export const create_pages = async (name) => {
    try {
        const response = await axios.post(`${API_HOST}pages/`, { name });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}