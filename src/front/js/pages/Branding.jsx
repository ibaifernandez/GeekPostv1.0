import React from "react";
import comingSoon from "../../img/coming-soon.jpg"
import "../../styles/branding.css";

export const Branding = () => (
    <div className="d-flex w-100 50vh justify-content-center ">
        <img className="coming-soon" src={comingSoon} />
    </div>
)