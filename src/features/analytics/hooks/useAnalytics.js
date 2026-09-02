import { useQuery } from "@tanstack/react-query";

import {
  getAnalyticsSummary,
  getTrafficData,
  getTopPages,
  getTopCountries,
  getTopEvents,
  getTopReferrers,
  getSessionAnalytics
} from "../services/analyticsApi";

import { getAccessToken } from "../../auth/store/authStore";

/*
Analytics Summary
*/
export function useAnalyticsSummary(trackingId, days) {
  return useQuery({
    queryKey: ["analytics-summary", trackingId, days],
    queryFn: async () => {
      const res = await getAnalyticsSummary(trackingId, days);
      return res.data;
    },
    enabled: !!trackingId && !!getAccessToken()
  });
}

/*
Traffic
*/
export function useTrafficData(trackingId, days) {
  return useQuery({
    queryKey: ["analytics-traffic", trackingId, days],
    queryFn: async () => {
      const res = await getTrafficData(trackingId, days);
      return res.data;
    },
    enabled: !!trackingId && !!getAccessToken()
  });
}

/*
Top Pages
*/
export function useTopPages(trackingId, days) {
  return useQuery({
    queryKey: ["analytics-top-pages", trackingId, days],
    queryFn: async () => {
      const res = await getTopPages(trackingId, days);
      return res.data;
    },
    enabled: !!trackingId && !!getAccessToken()
  });
}

/*
Top Events
*/
export function useTopEvents(trackingId, days) {
  return useQuery({
    queryKey: ["analytics-top-events", trackingId, days],
    queryFn: async () => {
      const res = await getTopEvents(trackingId, days);
      return res.data;
    },
    enabled: !!trackingId && !!getAccessToken()
  });
}

/*
Top Referrers
*/
export function useTopReferrers(trackingId, days) {
  return useQuery({
    queryKey: ["analytics-top-referrers", trackingId, days],
    queryFn: async () => {
      const res = await getTopReferrers(trackingId, days);
      return res.data;
    },
    enabled: !!trackingId && !!getAccessToken()
  });
}

/*
Top Countries
*/
export function useTopCountries(trackingId, days) {
  return useQuery({
    queryKey: ["analytics-top-countries", trackingId, days],
    queryFn: async () => {
      const res = await getTopCountries(trackingId, days);
      return res.data;
    },
    enabled: !!trackingId && !!getAccessToken()
  });
}

/*
Session Analytics
*/
export function useSessionAnalytics(trackingId, days) {
  return useQuery({
    queryKey: ["session-analytics", trackingId, days],
    queryFn: async () => {
      const res = await getSessionAnalytics(trackingId, days);
      return res.data;
    },
    enabled: !!trackingId && !!getAccessToken()
  });
}



