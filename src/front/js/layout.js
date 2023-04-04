import React from "react";
import { Outlet } from "react-router-dom";
import { IntroHeader } from "./component/IntroHeader.jsx";
import { Footer } from "./component/Footer.jsx";

export const Layout = () => (
    <>
        <IntroHeader />
        <Outlet />
        <Footer />
    </>          
      );        