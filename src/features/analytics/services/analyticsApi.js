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



/*
Top Events
*/

export const getTopEvents = (trackingId) => {
  return apiClient.get(`/analytics/top-events?trackingId=${trackingId}`);
};

/*
Top Referrers
*/

export const getTopReferrers = (trackingId) => {
  return apiClient.get(`/analytics/top-referrers?trackingId=${trackingId}`);
};

/*
Top Countries
*/

export const getTopCountries = (trackingId) => {
  return apiClient.get(`/analytics/top-countries?trackingId=${trackingId}`);
};