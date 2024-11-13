import { request } from "../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useCreateClients = () => {
    return useMutation({
        mutationFn: (data) => {
            return request.post("/clients", data).then((res) => res.data)
        }
    })
}