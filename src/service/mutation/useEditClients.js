import { client } from "../../config/query-client";
import { request } from "../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useEditClients = () => {
    return useMutation({
        mutationFn: ({id, data}) => request.put(`/clients/${id}`, data).then((res) => res.data),
        onSuccess: () => {
            client.invalidateQueries(["clients"]);
        }
    })
}