import { useQuery } from "@tanstack/react-query";
import { getWebsite } from "../services/websiteApi";

export function useWebsiteSettings(id) {

  return useQuery({
    queryKey: ["website", id],
    queryFn: async () => {
      const res = await getWebsite(id);
      return res.data;
    },
    enabled: !!id
  });

}