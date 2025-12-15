import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://10.10.1.66:8000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
