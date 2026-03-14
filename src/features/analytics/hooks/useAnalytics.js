import { useQuery } from "@tanstack/react-query";

import {
  getAnalyticsSummary,
  getTrafficData,
  getTopPages,
  getTopCountries,
  getTopEvents,
  getTopReferrers
  
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

/*
Top Events
*/

export function useTopEvents(trackingId) {

  return useQuery({
    queryKey: ["analytics-top-events", trackingId],

    queryFn: async () => {
      const response = await getTopEvents(trackingId);
      return response.data;
    },

    enabled: !!trackingId
  });

}



/*
Top Referrers
*/

export function useTopReferrers(trackingId) {

  return useQuery({
    queryKey: ["analytics-top-referrers", trackingId],

    queryFn: async () => {
      const response = await getTopReferrers(trackingId);
      return response.data;
    },

    enabled: !!trackingId
  });

}

/*
Top Countries
*/

export function useTopCountries(trackingId) {

  return useQuery({
    queryKey: ["analytics-top-countries", trackingId],

    queryFn: async () => {
      const response = await getTopCountries(trackingId);
      return response.data;
    },

    enabled: !!trackingId
  });

}