import React from "react";
import { useForm } from "react-hook-form";

export const Form = ({dataSubmit}) => {
    const {handleSubmit, reset, register} = useForm();
    const submit = (data) => {
        dataSubmit(data);
        reset();
    }
    return (
        <div>
            <form className="flex gap-[15px]" onSubmit={handleSubmit(submit)}>
                <input className="border border-[2px] border-[pink] rounded p-[20px]" placeholder="Client name" {...register("name")} type="text" />
                <input className="border border-[2px] border-[pink] rounded p-[20px]" placeholder="Client age" {...register("age")} type="number" />
                <button className="bg-[pink] py-[18px] px-[25px] text-[#fff] font-bold text-[20px]" type="submit">Add</button>
            </form>
        </div>
    )
}