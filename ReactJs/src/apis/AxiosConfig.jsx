import axios from "axios";

const AxiosConfig = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  // headers: {
  //   "Content-Type": "application/json",
  //   Authorization: "Bearer YOUR_TOKEN",
  // },
  // withCredentials: true,
});

export default AxiosConfig;
