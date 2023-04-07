import React from "react";
import { Outlet } from "react-router-dom";
import { StandardHeader } from "../component/StandardHeader.jsx";
import { Footer } from "../component/Footer.jsx";
import { Breadcrumbs } from "../component/Breadcrumbs.jsx"

export const Layout = () => {
    return (
    <>
        <StandardHeader />
        <Breadcrumbs />
        <Outlet />
        <Footer />
    </>
    );
};