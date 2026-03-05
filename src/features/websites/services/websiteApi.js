import apiClient from "../../../infrastructure/api/apiClient";

export const getWebsites = () => {
    return apiClient.get("/websites");
};

export const createWebsite = (data) => {
    return apiClient.post("/websites", data);
}

export const deleteWebsite = (id) => {
    return apiClient.delete(`/websites/${id}`)
}



