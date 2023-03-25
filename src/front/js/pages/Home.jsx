import React from "react";
import { HomeHeader } from "../component/HomeHeader.jsx"
import { HomeSidebar } from "../component/HomeSidebar.jsx"
import { Footer } from "../component/Footer.jsx"
import { HomeProcess } from "../component/HomeProcess.jsx"
import "../../styles/home.css";


export const Home = () => (
    <div id="home">
        <HomeHeader />
        <HomeSidebar />
        <div id="main-wrapper">
            <HomeProcess />
        </div>
        <Footer />
    </div>
)