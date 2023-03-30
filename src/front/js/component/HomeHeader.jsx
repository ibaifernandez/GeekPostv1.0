import React, { useState } from "react";
import { Logo } from "./Logo.jsx";
import { Link } from "react-router-dom"

export const HomeHeader = () => {
    // const [headerOpacity, setHeaderOpacity] = useState({
    //     opacity: 0,
    //     currentScrollHeight: 0,
    // });

    // window.onscroll = () => {
    //     const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
    //     setHeaderOpacity({ currentScrollHeight: newScrollHeight });
    // };

    // const opacity = Math.min(headerOpacity.currentScrollHeight / 100, 1);

    return (
        <header
            // style={{ background: `rgb(95, 57, 141, ${opacity})` }}
            id="home-header"
            className="sticky-top"
        >
            <nav className="navbar navbar-expand-lg  px-3 d-flex justify-content-between">
                <Logo />
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/infopost">
                                <button className="getstarted ms-auto">
                                    Crear 🖌
                                </button>
                            </Link>
                        </li>
                    </ul>
            </nav>
        </header>
    );
};
