import React, { useState } from "react";
import { useDeleteClients } from "../../service/mutation/useDeleteClients";
import { useEditClients } from "../../service/mutation/useEditClients";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

export const ClientCard = ({name, age, id}) => {
    const {mutate} = useDeleteClients();
    const { mutate: put } = useEditClients();
    const [isOpen, setOpen] = useState(false);
    const [editName, setEditName] = useState(name);
    const [editAge, setEditAge] = useState(age);
    const deleteUser = () => {
        mutate(id, {
            onSuccess: (res) => {
                console.log(res);
            }
        });
    };

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const editUser = () => {
        put(
            { id: id, data: { name: editName, age: editAge } },
            {
                onSuccess: () => {
                    closeModal();
                }
            }
        );
    };
    return (
        <>
        <div className="mb-[20px]">
            <h2 className="text-[25px] font-bold mb-[10px]">Name: {name}</h2>
            <p className="text-[20px] font-bold mb-[10px]">Age: {age}</p>
            <div className="flex gap-[20px]">
                <button  onClick={deleteUser} className="bg-pink-500 py-[16px] px-[25px] rounded">Delete</button>
                <button onClick={openModal} className="bg-green-500 py-[16px] px-[25px] rounded">Edit</button>
            </div>
        </div>
        <Modal open={isOpen} onClose={closeModal}>
        <Box
            padding={4}
            bgcolor="background.paper"
            margin="auto"
            width={300}
            borderRadius={2}
            display="flex"
            flexDirection="column"
            gap={2}
        >
            <Typography variant="h6">Client edit</Typography>
            <TextField
                fullWidth
                label="Name"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                margin="normal"
            />
            <TextField
                fullWidth
                label="Age"
                value={editAge}
                onChange={(e) => setEditAge(e.target.value)}
                margin="normal"
            />
            <Button onClick={editUser} color="primary" variant="contained">
                Save
            </Button>
        </Box>
    </Modal>
        </>
    )
}