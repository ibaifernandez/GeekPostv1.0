import React from "react";

import { MainHero } from "./MainHero.jsx";
import { Clients } from "./Clients.jsx";
import { AboutUs } from "./AboutUs.jsx";
import { Process } from "./Process.jsx";
import { NeedHelp } from "./NeedHelp.jsx";
import { Newsletter } from "./Newsletter.jsx";

export const Main = () => (
    <>
        <MainHero />
        <section id="clients" className="clients section-bg">
            <div className="container-fluid p-0">
                <div className="row" data-aos="zoom-in">
                    <Clients />
                </div>
            </div>
        </section>

        <Process />
        <NeedHelp />
        <AboutUs />
        <Newsletter />
    </>
);
