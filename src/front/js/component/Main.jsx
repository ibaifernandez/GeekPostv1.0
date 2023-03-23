import React from "react";

import { Clients } from "./Clients.jsx";
import { Aboutus } from "./Aboutus.jsx";
import { Process } from "./Process.jsx";
import { Needhelp } from "./Needhelp.jsx";

export const Main = () => (
    <section id="clients" className="clients section-bg">
        <div className="container-fluid p-0">
            <div className="row" data-aos="zoom-in">
                <Clients />
            </div>
            <Process />
            <Needhelp />
            <Aboutus />
        </div>
    </section>
);
