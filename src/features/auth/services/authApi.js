import apiClient from "../..//../infrastructure/api/apiClient";

export const login = (data) => {
    return apiClient.post("/auth/login", data);
}

export const signup = (data) => {
    return apiClient.post("/auth/signup", data);
}