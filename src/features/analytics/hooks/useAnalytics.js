import { useQuery } from "@tanstack/react-query";

import {
  getAnalyticsSummary,
  getTrafficData,
  getTopPages
} from "../services/analyticsApi";

/*
Analytics Summary
Visitors
PageViews
Events
*/

export function useAnalyticsSummary(trackingId) {

  return useQuery({
    queryKey: ["analytics-summary", trackingId],

    queryFn: async () => {
      const response = await getAnalyticsSummary(trackingId);
      return response.data;
    },

    enabled: !!trackingId
  });

}

/*
Traffic Chart Data
*/

export function useTrafficData(trackingId) {

  return useQuery({
    queryKey: ["analytics-traffic", trackingId],

    queryFn: async () => {
      const response = await getTrafficData(trackingId);
      return response.data;
    },

    enabled: !!trackingId
  });

}

/*
Top Pages Table
*/

export function useTopPages(trackingId) {

  return useQuery({
    queryKey: ["analytics-top-pages", trackingId],

    queryFn: async () => {
      const response = await getTopPages(trackingId);
      return response.data;
    },

    enabled: !!trackingId
  });

}