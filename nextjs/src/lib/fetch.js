import axios from "axios";
import { getSession } from "./session";

export const fetch = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_URL_BACKEND,
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