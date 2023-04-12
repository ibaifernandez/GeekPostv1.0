// Create Amazing Password Forms

// https://www.chromium.org/developers/design-documents/create-amazing-password-forms/

import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import { TOSModal } from "../component/modals/TOSModal.jsx";

import "../../styles/signup.css";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const location = useLocation()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
	const emailRegex = /^\S+@\S+\.\S+$/;
	const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!firstName) {
		newErrors.firstName = "Escribe tu nombre.";
	}
	
	if (!email) {
		newErrors.email = 'Escribe tu email.';
	} else if (!emailRegex.test(email)) {
		newErrors.email = 'Ingresa un email válido.';
	}
	
	if (!password) {
		newErrors.password = "Escribe tu contraseña.";
	} else if (!passwordRegex.test(password)) {
		newErrors.passwordType = 'La contraseña debe tener al menos 8 caracteres, un número y un símbolo.';
	}

    if (password !== passwordCheck) {
      newErrors.passwordCheck = "Las contraseñas no coinciden.";
    }

    if (!isChecked) {
      newErrors.requireTOS = "Debes aceptar los términos y condiciones.";
    } else {
	}

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else {
		const createUser = await actions.createUser({
			email,
			password,
			firstName,
		});
		if (createUser) {
			navigate("/home", { state: { prevPath: location.pathname } })
		}
 	};
}

	return (
		<div id="shadow-wrapper">
		<section id="signup" className="d-flex w-100">
			<div id="signup-left-wrapper" className="w-50">
				<h1 className="d-flex p-3 mt-4">Registro</h1>
				{ store.errorSignup ?
						<div className="rounded signup-warning text-white p-3">
							Una cuenta con el email seleccionda ya está creada. Por favor, <Link to="/login">ingresa a tu perfil</Link>.
						</div>
					: null }			
				<form onSubmit={handleSubmit} id="signup-form input-group" className="d-flex flex-column" noValidate>
					<div id="user-first-name" className="d-flex flex-row m-3">
						<label className="opacity-50 signup-icon" htmlFor="first-name-input">
							<i className="fa-solid fa-user"></i>
						</label>
						<input
							id="first-name-input"
							name="firstName"
							type="text"
							className="border-0 border-bottom w-100 ms-3 bg-transparent"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							placeholder="Ingresa tu nombre"
							autoComplete="off"
						/>
					</div>
					<div>
						{errors.firstName ? <div className="rounded signup-warning text-white mx-3 p-1">{errors.firstName}</div> : null}
					</div>
					<div id="user-email" className="d-flex m-3">
						<label className="opacity-50 signup-icon" htmlFor="email-input">
							<i className="fa-solid fa-envelope"></i>
						</label>
						<input
							id="email-input"
							name="email"
							type="email"
							className="border-0 border-bottom w-100 ms-3 bg-transparent"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Ingresa tu correo electrónico"
							autoComplete="email"
						/>
					</div>
					<div>
						{errors.email ? <div className="rounded signup-warning text-white mx-3 p-1">{errors.email}</div> : null}
					</div>
					<div id="user-pwd" className="d-flex m-3 bg-transparent">
						<label className="opacity-50 signup-icon" htmlFor="pwd-input">
							<i className="fa-solid fa-lock"></i>
						</label>
						<input
							id="pwd-input"
							name="pwd"
							type="password"
							className="border-0 border-bottom w-100 ms-3 bg-transparent"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Ingresa tu contraseña"
							autoComplete="new-password"
						/>
					</div>
					<div>
						{errors.password ? <div className="rounded signup-warning text-white mx-3 p-1">{errors.password}</div>
						: errors.passwordType ? <div className="rounded signup-warning text-white mx-3 p-1">{errors.passwordType}</div> : null}
					</div>
					<div id="user-pwd-check" className="d-flex m-3 text-danger">
						<label className="opacity-50 signup-icon" htmlFor="pwd-check-input">
							<i className="fa-solid fa-lock"></i>
						</label>
						<input
							id="pwd-check-input"
							name="pwd-check"
							type="password"
							value={passwordCheck}
							className="border-0 border-bottom w-100 ms-3 bg-transparent"
							onChange={(e) => setPasswordCheck(e.target.value)}
							placeholder="Confirma tu contraseña"
							autoComplete="off"
						/>
					</div>
					<div>
					{errors.passwordCheck ? <div className="rounded signup-warning text-white mx-3 p-1">{errors.passwordCheck}</div> : null}
					</div>
					<div className="form-check mb-0 mt-3 ms-3">
  						<input className="form-check-input" type="checkbox"
							checked={isChecked}
							onChange={(e) => setIsChecked(e.target.checked)} id="check-tos" />
  						<label className="form-check-label tos-acceptance-text" htmlFor="check-tos">
							Estoy de acuerdo con los <a className="link-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">términos y condiciones </a> de este sitio web.
						</label>
					</div>
					{errors.requireTOS ? <div className="rounded signup-warning text-white mx-3 mt-1 p-1">{errors.requireTOS}</div> : "" }	
					<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h2 className="modal-title">Términos y condiciones</h2>
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								
								<div className="modal-body">
									<TOSModal />
								</div>
								
								<div className="modal-footer">
									<button type="button" className="btn btn-signup" data-bs-dismiss="modal">Cerrar</button>
								</div>
							</div>
						</div>
					</div>				
			<div className="d-flex justify-content-center">     
				<button type="submit" className="btn-signup">Regístrate 🖋</button>
			</div>
			<div className="d-flex justify-content-center"></div>
				</form>

				<Link to="/login" className="link-secondary text-center">
					¡Ya tengo una cuenta!
				</Link>
			</div>
		<div id="signup-right-wrapper" className="w-50 img-signup"></div>
		</section>
	</div>
);
};