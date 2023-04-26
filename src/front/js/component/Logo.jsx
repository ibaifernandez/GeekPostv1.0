import React from "react";
import { Link } from "react-router-dom";

import logo from "../../img/geekpost-icon.png";

export const Logo = () => (
    <div className="d-flex align-items-center logo">
        <Link to="/"
            href="#"
            className="logo-link"
        >
            <img src={logo} alt="" className="img-fluid position-absolute" />
            <h1 className="logo position-relative">
                <span className="position-relative">GeekPost</span>
            </h1>
        </Link>
    </div>
);
