import { request } from "../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetClients = () => {
    return useQuery({
        queryKey: ["clients"],
        queryFn:() => request.get("/clients").then((res) => res.data)
    })
}