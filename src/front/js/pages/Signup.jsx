import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { TOSModal } from "../component/modals/TOSModal.jsx";
import { SignupModal } from "../component/modals/SignupModal.jsx";

import "../../styles/signup.css";

import fotoSignUp from "../../img/sign-up.jpg";

export const Signup = () => {
  const { store,actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSignupModal, setShowSignupModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = "Escribe tu nombre.";
    }

    if (!email) {
      newErrors.email = "Escribe tu email.";
    }

    if (!password) {
      newErrors.password = "Escribe tu contraseña";
    }

    if (password !== passwordCheck) {
      newErrors.passwordCheckFalse = "Las contraseñas no coinciden.";
    }

    if (!isChecked) {
      newErrors.requireTOS = "Debes aceptar los términos y condiciones.";
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
			setShowSignupModal(true);
			console.log(showSignupModal);
		}
 	};
}
	
	return (
		<section id="signup" className="d-flex justify-content-around">
			<div id="signup-left-wrapper" className="pt-5">
				<h1 className="d-flex p-3">Registro</h1>
				<form onSubmit={handleSubmit} id="signup-form input-group" className="d-flex flex-column mt-3">
					<div id="user-first-name" className="d-flex flex-row m-3">
						<label className="opacity-50 signup-icon" htmlFor="first-name-input">
							<i className="fa-solid fa-user"></i>
						</label>
						<input
							id="first-name-input"
							name="firstName"
							type="text"
							className="border-0 border-bottom w-100"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							placeholder="Ingresa tu nombre"
						/>
					</div>
					{errors.firstName && <div className="ms-3 text-danger">{errors.firstName}</div>}
					<div id="user-email" className="d-flex m-3">
						<label className="opacity-50 signup-icon" htmlFor="email-input">
							<i className="fa-solid fa-envelope"></i>
						</label>
						<input
							id="email-input"
							name="email"
							type="email"
							className="border-0 border-bottom w-100"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Ingresa tu correo electrónico"
						/>
					</div>
					{errors.email && <div className="ms-3 text-danger">{errors.email}</div>}
					<div id="user-pwd" className="d-flex m-3">
						<label className="opacity-50 signup-icon" htmlFor="pwd-input">
							<i className="fa-solid fa-lock"></i>
						</label>
						<input
							id="pwd-input"
							name="pwd"
							type="password"
							className="border-0 border-bottom w-100"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Ingresa tu contraseña"
						/>
					</div>
					{errors.password && <div className="ms-3 text-danger">{errors.password}</div>}
					<div id="user-pwd-check" className="d-flex m-3 text-danger">
						<label className="opacity-50 signup-icon" htmlFor="pwd-check-input">
							<i className="fa-solid fa-lock"></i>
						</label>
						<input
							id="pwd-check-input"
							name="pwd-check"
							type="password"
							value={passwordCheck}
							className="border-0 border-bottom w-100"
							onChange={(e) => setPasswordCheck(e.target.value)}
							placeholder="Confirma tu contraseña"
						/>
					</div>	
					{errors.passwordCheckFalse && <div className="ms-3 text-danger">{errors.passwordCheckFalse}</div>}

					<div className="form-check mb-0 mt-3 ms-3">
  						<input className="form-check-input" type="checkbox"
							checked={isChecked}
							onChange={(e) => setIsChecked(e.target.checked)} id="check-tos" />
  						<label className="form-check-label" htmlFor="check-tos">
								Estoy de acuerdo con los <a className="link-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">términos y condiciones </a> de este sitio web.
							</label>
					</div>
					{!isChecked && <div className="ms-3 mt-3 text-danger">{errors.requireTOS}</div>}

						
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
			<Link to="/home">
				<button type="submit" className="btn-signup">Regístrate 🖋</button>
				</Link>
			</div>
			</form>
			<div className="d-flex justify-content-center">
				<Link to="/login" className="text-secondary">
					¡Ya tengo una cuenta!
				</Link>
			</div>
		</div>
		<div id="signup-left-wrapper">
        <img className="mt-5 w-100 rounded signup-img" src={fotoSignUp} alt="GeekPost Signup" />
      </div>
	  <div>
	  {showSignupModal && (
		<div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">¡Bienvenid@ a GeekPost!</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i className="fa-solid fa-cross"></i>
                        </span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Registro exitoso! ¡Disfruta GeekPost!</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">¡Empezar!</button>
                </div>
            </div>
        </div>
    </div>)}
	  </div>
	</section>
		);
	};