import user_img from "../../img/hero-img.jpeg"
import { Logo } from "../component/Logo.jsx"
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const HomeSidebar = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getUserDetails();
  }, []);

  return (
    <aside className="main">
      <div id="home-sidebar" className="d-flex flex-column">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={user_img} alt={`username pic`} width="50" height="50" className="rounded-circle me-2 user-profile-img" />
          <h1 id="sidebar-username">{`${store.user.first_name}`}</h1>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/home" className="nav-link sidebar-nav-link">
                <i className="fa fa-home pe-3" aria-hidden="true" width="16" height="16"></i>
                Escritorio
            </Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link sidebar-nav-link">
              <i className="fa fa-user pe-3" aria-hidden="true" width="16" height="16"></i>
              Mi perfil
            </a>
          </li>
          <li className="nav-item">
            <Link to="/my-compositions" className="nav-link sidebar-nav-link">
                <i className="fa fa-brush pe-3" aria-hidden="true" width="16" height="16"></i>
                Mis composiciones
            </Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link sidebar-nav-link">
              <i className="fa fa-gear pe-3" aria-hidden="true" width="16" height="16"></i>
              Configuración
            </a>
          </li>
          <li className="nav-item">
              <a as="p" className="nav-link sidebar-nav-link" onClick={actions.logOut}>
                <i className="fa fa-sign-out pe-3" aria-hidden="true" width="16" height="16"></i>
                Salir
              </a>
            
          </li>
        </ul>
        <hr />
      </div>
    </aside>
  )
};