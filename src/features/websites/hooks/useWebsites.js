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
      queryClient.invalidateQueries({ queryKey: ["websites"] });
    },

    onError: (error) => {
      console.error("Create website error:", error);
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
      queryClient.invalidateQueries({ queryKey: ["websites"] });
    },

    onError: (error) => {
      console.error("Delete website error:", error);
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

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["websites"] });
    },

    onError: (error) => {
      console.error("Update website error:", error);
    }
  });

}