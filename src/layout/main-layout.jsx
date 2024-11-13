import React from "react";
import { Header } from "./header";
import { Navigate, Outlet } from "react-router-dom";
import { loadState } from "../config/storege";

export const MainLayout = () => {
    const accessToken = loadState("userData");
  if (!accessToken) {
    return <Navigate to="/" />;
  }
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}