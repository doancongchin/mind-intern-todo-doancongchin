import axios from "axios";
import type { LoginRequest, LoginResponse } from "../types/auth.type";

const api = axios.create({
  baseURL: "http://10.10.1.66:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginApi = (data: LoginRequest) => {
  return api.post<LoginResponse>("/users/login", data);
};
