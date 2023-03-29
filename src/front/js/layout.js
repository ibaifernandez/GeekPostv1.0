import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./component/Header.jsx";
import { Footer } from "./component/Footer.jsx";

export const Layout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>          
      );        