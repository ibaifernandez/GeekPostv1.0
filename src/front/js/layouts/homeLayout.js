import React from "react";
import { Outlet } from "react-router-dom";
import { HomeSidebar } from "../component/HomeSidebar.jsx";
import { HomeHeader } from "../component/HomeHeader.jsx";
import { Footer } from "../component/footer/Footer.jsx";

export const HomeLayout = () => {
  return (
    <>
      <HomeHeader />
      <HomeSidebar />
      <Outlet />
      <Footer />
    </>
  );
};
