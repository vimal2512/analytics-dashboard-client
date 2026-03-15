import apiClient from "../../../infrastructure/api/apiClient";

export const getAnalyticsSummary = (trackingId, days) => {
  return apiClient.get(`/analytics/summary?trackingId=${trackingId}&days=${days}`);
};

export const getTrafficData = (trackingId, days) => {
  return apiClient.get(`/analytics/traffic?trackingId=${trackingId}&days=${days}`);
};

export const getTopPages = (trackingId, days) => {
  return apiClient.get(`/analytics/top-pages?trackingId=${trackingId}&days=${days}`);
};



/*
Top Events
*/

export const getTopEvents = (trackingId, days) => {
  return apiClient.get(`/analytics/top-events?trackingId=${trackingId}&days=${days}`);
};

/*
Top Referrers
*/

export const getTopReferrers = (trackingId,days) => {
  return apiClient.get(`/analytics/top-referrers?trackingId=${trackingId}&days=${days}`);
};

/*
Top Countries
*/

export const getTopCountries = (trackingId,days) => {
  return apiClient.get(`/analytics/top-countries?trackingId=${trackingId}&days=${days}`);
};