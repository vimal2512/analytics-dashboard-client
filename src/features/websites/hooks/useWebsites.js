import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getWebsites, createWebsite, deleteWebsite } from "../services/websitesMockApi";

export function useWebsites() {
    return useQuery({
        queryKey: ["websites"],
        queryFn: getWebsites
    });
}

export function useCreateWebsite() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createWebsite,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["websites"]});
        }
    });
}

export function useDeleteWebsite() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteWebsite,
        onSuccess: () => {
            queryClient.invalidateQueries(["websites"]);
        }
    });
}