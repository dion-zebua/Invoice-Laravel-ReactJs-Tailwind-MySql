import axios from "axios";

const fetch = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        // Authorization: "Bearer YOUR_TOKEN",
    },
    withCredentials: true,
});


export default fetch;