import React from "react";

import logo from "../../img/geekpost-icon.png";

export const Logo = () => (
    <div id="logo" className="d-flex align-items-center logo">
        <a
            href="#"
            className="logo-link"
        >
            <img src={logo} alt="" className="img-fluid position-absolute" />
            <h1 className="logo position-relative">
                <span className="position-relative">GeekPost</span>
            </h1>
        </a>
    </div>
);
