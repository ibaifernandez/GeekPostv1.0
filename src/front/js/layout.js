import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./component/Header.jsx";
import { Footer } from "./component/Footer.jsx";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;