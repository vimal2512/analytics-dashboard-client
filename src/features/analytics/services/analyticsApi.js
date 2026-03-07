import apiClient from "../../../infrastructure/api/apiClient";

export const getAnalyticsSummary = (trackingId) => {
  return apiClient.get(`/analytics/summary?trackingId=${trackingId}`);
};

export const getTrafficData = (trackingId) => {
  return apiClient.get(`/analytics/traffic?trackingId=${trackingId}`);
};

export const getTopPages = (trackingId) => {
  return apiClient.get(`/analytics/top-pages?trackingId=${trackingId}`);
};