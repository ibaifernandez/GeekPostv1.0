import React from "react";
import { Outlet } from "react-router-dom";
import { IntroHeader } from "../component/IntroHeader.jsx";
import { Footer } from "../component/footer/Footer.jsx";

export const IntroLayout = () => (
  <>
    <IntroHeader />
    <Outlet />
    <Footer />
  </>
);
