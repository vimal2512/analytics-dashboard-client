import apiClient from "../../../infrastructure/api/apiClient";

export const registerUser = (data) => {
  return apiClient.post("/auth/register", data);
};

export const loginUser = (data) => {
  return apiClient.post("/auth/login", data);
};