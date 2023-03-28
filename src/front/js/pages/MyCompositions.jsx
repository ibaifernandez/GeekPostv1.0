import React from "react";
import { HomeHeader } from "../component/HomeHeader.jsx"
import { HomeSidebar } from "../component/HomeSidebar.jsx"
import { Footer } from "../component/Footer.jsx"
import { Composition } from "../component/Composition.jsx";
import "../../styles/home.css";


export const MyCompositions = () => (
    <div id="home">
        <HomeHeader />
        <HomeSidebar />
        <div id="main-wrapper">
            <Composition />
        </div>
        <Footer />
    </div>
)