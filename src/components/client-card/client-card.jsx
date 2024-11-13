import React from "react";
import { useDeleteClients } from "../../service/mutation/useDeleteClients";
import { useEditClients } from "../../service/mutation/useEditClients";

export const ClientCard = ({name, age, id}) => {
    const {mutate} = useDeleteClients();
    const { mutate: put } = useEditClients();
    const deleteUser = () => {
        mutate(id, {
            onSuccess: (res) => {
                console.log(res);
            }
        });
    };

    const editUser = () => {

    }
    return (
        <div>
            <h2 className="">{name}</h2>
            <p>{age}</p>
            <div>
                <button onClick={deleteUser} className="">Delete</button>
                <button onClick={editUser}>Edit</button>
            </div>
        </div>
    )
}