import React, { useState } from "react";
import { Logo } from "./Logo.jsx";
import { Link, useLocation } from "react-router-dom"

export const HomeHeader = () => {

    const location = useLocation()

    return (
        <header
            // style={{ background: `rgb(95, 57, 141, ${opacity})` }}
            id="home-header"
            className="sticky-top"
        >
            <nav className="navbar navbar-expand-lg  px-3 d-flex justify-content-between">
                <Logo />
                    <ul id="header-create-post-button" className="navbar-nav d-flex justify-content-end w-12">
                        <li className="nav-item">
                            {location.pathname === "/infopost" ?
                                <button className="getstarted ms-auto" onClick={() => window.location.reload()}>
                                    Recargar
                                </button>
                            : 
                            <Link to="/infopost">
                                <button className="getstarted ms-auto">
                                    Crear 🖌
                                </button>
                            </Link>
                            }
                        </li>
                    </ul>
            </nav>
        </header>
    );
};
