import React, { useState } from "react";
import { Logo } from "./Logo.jsx";

export const Header = () => {
    const [headerOpacity, setHeaderOpacity] = useState({
        opacity: 0,
        currentScrollHeight: 0,
    });

    window.onscroll = () => {
        const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
        setHeaderOpacity({ currentScrollHeight: newScrollHeight });
    };

    const opacity = Math.min(headerOpacity.currentScrollHeight / 100, 1);

    return (
        <header
            style={{ background: `rgb(95, 57, 141, ${opacity})` }}
            id="header"
            className="sticky-top"
        >
            <nav className="navbar navbar-expand-lg  px-3 d-flex justify-content-between">
                <Logo />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">
                        <i className="fas fa-bars"></i>
                    </span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                ¡Hola! 👋🏼
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Ayuda 👩🏽‍🚒
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contacto 💌
                            </a>
                        </li>
                        <li className="nav-item">
                            <button className="getstarted ms-auto">
                                Ingresar 🤩
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
