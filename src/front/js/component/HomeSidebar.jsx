import user_img from "../../img/hero-img.jpeg"
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

import anon from "../../img/anon.png";

export const HomeSidebar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	useEffect(() => {
		actions.getUserDetails();
	}, []);

	const handleLogout = () => {
		actions.logOut();
		navigate("/");
	}

	return (
		<aside className="main">
			<div id="home-sidebar" className="d-flex flex-column">
				<div href="#" className="d-flex align-items-center text-white text-decoration-none" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
					{store.user.logo ?
						<img src={store.user.logo} alt={store.user.identity} width="50" height="50" className="rounded-circle me-2 user-profile-img" />
					: <img src={anon} alt={store.user.firstName} width="50" height="50" className="rounded-circle me-2 user-profile-img" />} 
					<h2 id="sidebar-username">{store.user.firstName ? `${store.user.firstName}` : null}</h2>
				</div>
				<hr />
				<ul className="nav nav-pills flex-column mb-auto">
					<li className="nav-item">
						<Link to="/home" className="nav-link sidebar-nav-link">
								<i className="fa fa-home pe-3" aria-hidden="true" width="16" height="16"></i>
								Escritorio
						</Link>
					</li>
					<li className="nav-item">
						<Link to="my-profile" className="nav-link sidebar-nav-link">
							<i className="fa fa-user pe-3" aria-hidden="true" width="16" height="16"></i>
							<span id="profile-link-home-sidebar">Mi perfil</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/my-compositions" className="nav-link sidebar-nav-link">
								<i className="fa fa-brush pe-3" aria-hidden="true" width="16" height="16"></i>
								<span id="my-compositions-link-home-sidebar">Mis composiciones</span>
						</Link>
					</li>
					<li className="nav-item">
							<button className="nav-link sidebar-nav-link" onClick={handleLogout}>
								<i className="fa fa-sign-out pe-3" aria-hidden="true" width="16" height="16"></i>
								Salir
							</button>
						
					</li>
				</ul>
				<hr />
				<ul className="list-inline ms-4">
					<li className="list-inline-item me-4">
						{store.user.facebookProfile ? <a href={store.user.facebookProfile} className="link-light" target="_blank"><i className="fs-3 fa-brands fa-facebook-square"></i></a> : null} 
					</li>
					<li className="list-inline-item me-4">
						{store.user.instagramProfile ? <a href={store.user.instagramProfile} className="link-light" target="_blank"><i className="fs-3 fa-brands fa-instagram"></i></a> : null} 
					</li>
					<li className="list-inline-item me-4">
						{store.user.tiktokProfile ? <a href={store.user.tiktokProfile} className="link-light" target="_blank"><i className="fs-3 fa-brands fa-tiktok"></i></a> : null} 
					</li>
				</ul>
			</div>
		</aside>
	)
};