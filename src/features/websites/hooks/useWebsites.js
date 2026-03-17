import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  getWebsites,
  createWebsite,
  deleteWebsite,
  updateWebsite
} from "../services/websiteApi";

/*
GET ALL WEBSITES
*/
export function useWebsites() {

  return useQuery({
    queryKey: ["websites"],
    queryFn: async () => {
      const res = await getWebsites();
      return res.data;
    }
  });

}

/*
CREATE WEBSITE
*/
export function useCreateWebsite() {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createWebsite,

    onSuccess: () => {
      queryClient.invalidateQueries(["websites"]);
    }
  });

}

/*
DELETE WEBSITE
*/
export function useDeleteWebsite() {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteWebsite,

    onSuccess: () => {
      queryClient.invalidateQueries(["websites"]);
    }
  });

}

/*
UPDATE WEBSITE
*/
export function useUpdateWebsite() {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => updateWebsite(id, data),

    onSuccess: (_, variables) => {
      // refresh both list + single website
      queryClient.invalidateQueries(["websites"]);
      queryClient.invalidateQueries(["website", variables.id]);
    }
  });

}