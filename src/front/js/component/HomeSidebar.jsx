import React from 'react';
import user_img from "../../img/hero-img.jpeg"
import { Logo } from "../component/Logo.jsx"

export const HomeSidebar = () => {
  const userName = {};

  return (
    <aside>
      <div id="home-sidebar" className="d-flex flex-column">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={user_img} alt={`${userName} pic`} width="50" height="50" className="rounded-circle me-2 user-profile-img" />
          <h1 id="sidebar-username">{`{username}`}</h1>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link sidebar-nav-link">
              <i class="fa fa-home pe-3" aria-hidden="true" width="16" height="16"></i>
              Panel principal
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link sidebar-nav-link">
              <i class="fa fa-user pe-3" aria-hidden="true" width="16" height="16"></i>
              Mi perfil
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link sidebar-nav-link">
              <i class="fa fa-brush pe-3" aria-hidden="true" width="16" height="16"></i>
              Mis composiciones
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link sidebar-nav-link">
              <i class="fa fa-gear pe-3" aria-hidden="true" width="16" height="16"></i>
              Configuración
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link sidebar-nav-link">
              <i class="fa fa-sign-out pe-3" aria-hidden="true" width="16" height="16"></i>
              Salir
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </aside>
  )
};