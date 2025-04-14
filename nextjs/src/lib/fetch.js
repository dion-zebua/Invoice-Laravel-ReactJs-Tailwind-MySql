import axios from "axios";
import { getSession } from "./session";

export const fetch = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    },
    withCredentials: true,
});


fetch.interceptors.request.use(async (config) => {
    const user = await getSession();
    if (user?.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
}, (error) => Promise.reject(error));

export default fetch;