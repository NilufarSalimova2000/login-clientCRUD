import React from "react";
import { Form } from "../../components/form";
import { useCreateClients } from "../../service/mutation/useCreateClients";
import { useGetClients } from "../../service/query/useGetClients";
import { useQueryClient } from "@tanstack/react-query";
import { ClientCard } from "../../components/client-card";

export const Clients = () => {
    const {data, isLoading} = useGetClients();
    const {mutate} = useCreateClients();
    const client = useQueryClient();
    const submit = (data) => {
        mutate(data, {
            onSuccess: () => {
                client.invalidateQueries(["clients"])
            }
        })
        console.log(data);
    }
    return (
        <div className="container py-[30px]">
           <h1 className="font-bold text-[26px] mb-[20px]">Clients list</h1>
           <Form dataSubmit={submit} />
           <div className="pt-[30px]">
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                data?.map((item) => <ClientCard key={item.id} {...item} />)
            )}
           </div>
        </div>
    )
}