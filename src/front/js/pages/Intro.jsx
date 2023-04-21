import React from "react";

import { MainHero } from "../component/MainHero.jsx";
import { Clients } from "../component/Clients.jsx";
import { AboutUs } from "../component/AboutUs.jsx";
import { IntroProcess } from "../component/IntroProcess.jsx";
import { NeedHelp } from "../component/NeedHelp.jsx";
import { Newsletter } from "../component/Newsletter.jsx";

import "../../styles/intro.css";


export const Intro = () => (
    <>
        <MainHero />
        <Clients />
        <IntroProcess />
        <NeedHelp />
        <AboutUs />
        <Newsletter />
    </>
);
