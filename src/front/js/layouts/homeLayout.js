import React from "react";
import { Outlet } from "react-router-dom";
import { HomeSidebar } from "../component/HomeSidebar.jsx";
import { HomeHeader } from "../component/HomeHeader.jsx";
import { Footer } from "../component/footer/Footer.jsx";

export const HomeLayout = () => (
    <>
        <HomeHeader />
        <div className="container-fluid m-0 p-0">
            <div className="row g-0">   
                <div className="col-3 m-0 p-0">   
                    <HomeSidebar />
                </div>
                <div className="col-9 m-0 p-0">
                    <Outlet />
                </div>
            </div>
        </div>
        <Footer />
    </>
)
