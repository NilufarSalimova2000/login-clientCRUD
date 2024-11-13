import { client } from "../../config/query-client";
import { request } from "../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useDeleteClients = () => {
    return useMutation({
        mutationFn: (id) => request.delete(`/clients/${id}`).then((res) => res.data),
        onSuccess: () => {
            client.invalidateQueries(["clients"])
        }
    })
}