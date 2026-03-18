import apiClient from "../../../infrastructure/api/apiClient";

/*
GET ALL WEBSITES
*/
export const getWebsites = () => {
  return apiClient.get("/websites?userId=user_1");
};

/*
GET SINGLE WEBSITE
*/
export const getWebsite = (id) => {
  return apiClient.get(`/websites/${id}`);
};

/*
CREATE WEBSITE
*/
export const createWebsite = (data) => {
  return apiClient.post("/websites", data);
};

/*
DELETE WEBSITE
*/
export const deleteWebsite = (id) => {
  return apiClient.delete(`/websites/${id}`);
};

/*
UPDATE WEBSITE
*/
export const updateWebsite = (id, data) => {
  return apiClient.put(`/websites/${id}`, data);
};