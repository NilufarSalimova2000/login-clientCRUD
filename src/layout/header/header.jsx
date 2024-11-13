import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header className="py-[50px] bg-[pink]">
            <div className="container">
                <div className="flex gap-[20px]">
                    <NavLink className={({ isActive }) =>
                        `font-bold text-[20px] ${isActive ? 'text-black' : 'text-[#fff]'}`
                    } to={"/app"} end>Clients</NavLink>
                    <NavLink className={({ isActive }) =>
                        `font-bold text-[20px] ${isActive ? 'text-black' : 'text-[#fff]'}`
                    } to={"/app/debt"}>Debt</NavLink>
                </div>
            </div>
        </header>
    )
}