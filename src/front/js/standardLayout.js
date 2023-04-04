import React from "react";
import { Outlet } from "react-router-dom";
import { MainHeader } from "./component/MainHeader.jsx";
import { Footer } from "./component/Footer.jsx";

export const StandardLayout = () => {
    return (
        <>
            <MainHeader />
            <Outlet />
            <Footer />
        </>
    );
};