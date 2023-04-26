import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Logo } from "./Logo.jsx";
import { Link, useLocation } from "react-router-dom"

export const HomeHeader = () => {

    const {actions} = useContext(Context)

    const location = useLocation()

    return (
        <header className="home-header sticky-top">
            <nav className="navbar navbar-expand-lg  px-3 d-flex justify-content-between">
                <Logo />
                    <ul id="header-create-post-button" className="navbar-nav d-flex justify-content-end">
                        {location.pathname !== "/infopost" ? 
                        (<li className="nav-item">
                            <Link to="/infopost">
                                <button onClick={actions.cleanLocalStorage} className="getstarted ms-auto">
                                    Crear 🖌
                                </button>
                            </Link>
                        </li>)
                        :
                        (<li className="nav-item">
                        <Link to="/home">
                            <button className="getstarted ms-auto">
                                <i className="fa fa-home"></i>
                            </button>
                        </Link>
                    </li>)}
                    </ul>
            </nav>
        </header>
    );
};
