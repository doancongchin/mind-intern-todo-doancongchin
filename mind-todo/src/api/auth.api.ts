import axiosInstance from "./axios.instance";
import type { LoginRequest, LoginResponse } from "../types/auth.type";

export const loginApi = (data: LoginRequest) => {
  return axiosInstance.post<LoginResponse>("/users/login", data);
};
