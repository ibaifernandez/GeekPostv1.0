import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { StandardHeader } from "../component/StandardHeader.jsx";
import { Footer } from "../component/footer/Footer.jsx";
import { Breadcrumbs } from "../component/Breadcrumbs.jsx";

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      <StandardHeader />{" "}
      {location.pathname === "/output" ? null : <Breadcrumbs />} <Outlet />
      <Footer />
    </>
  );
};
