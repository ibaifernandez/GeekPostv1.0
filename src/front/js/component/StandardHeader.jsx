import React, { useState, useEffect } from "react";
import { Logo } from "./Logo.jsx";
import { Link } from "react-router-dom";

export const StandardHeader = () => {

	return (
		<header
			className="main-header sticky-top"
		>
			<nav className="navbar navbar-expand-lg px-3 d-flex justify-content-between">
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
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/hola">
								¡Hola! 👋🏼
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/ayuda" className="nav-link">
								Ayuda 👩🏽‍🚒
							</Link>
						</li>
					<li className="nav-item">
							<Link to="/documentacion" className="nav-link">
								Docs 📚
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contacto" className="nav-link">
								Contacto 💌
							</Link>
						</li>
						{localStorage.token ?
						<Link to={`/home`}>
							<li className="nav-item">
							<button className="getstarted ms-auto">
								<i className="fa fa-home"></i>
							</button>
							</li>
							</Link>
						: <Link to={`/login`}>
							<li className="nav-item">
							 <button onClick={"cleanLocalStorage"} className="getstarted ms-auto">
								Ingresar 🤩
							</button> 
							</li>
						</Link>}
					</ul>
				</div>
			</nav>
		</header>
	)
}
