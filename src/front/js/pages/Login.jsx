import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";

export const Login = () => {
    const { actions } = useContext(Context);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [formErrors, setFormErrors] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setFormErrors({ ...formErrors, [e.target.name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = formData;

        let errors = {};

        if (email === "") {
            errors.email = "Correo requerido";
        }

        if (password === "") {
            errors.password = "Contraseña requerida";
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            const isAuth = await actions.fetchCredentials(formData);
            if (isAuth) {
                navigate("/home");
            } else {
                setFormErrors({ ...formErrors, auth: "Credenciales inválidas" });
            }
        }
    };

    return (
        <div className="login-bg">
            <div className="row login-box">
                <div className="login-left-wrapper"></div>
                <div className="col login-right-wrapper login-form">
                    <div className="avatar"></div>
                    <div className="registration">
                        <span>¿Necesitas una cuenta?</span> 
                        <span>
                            <Link to="/signup" className="login-link">
                                {" "}Regístrate
                            </Link>
                                .
                        </span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email" className="d-flex align-items-center mb-3">
                            <i className="fa-solid fa-envelope"></i>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className=" login-input"
                                placeholder="Correo electrónico"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </label>
                        <div>
                            {formErrors.email ? (
                                <div className="login-warning mb-3">{formErrors.email}</div>
                            ) : null }
                        </div>
                        
                        <label htmlFor="password" className="d-flex align-items-center mb-3">
                            <i className="fa-solid fa-lock"></i>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className="login-input"
                                placeholder="Contraseña"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </label>
                        <div>
                            {formErrors.password ? (
                                <div className="login-warning">{formErrors.password}</div>
                            ) : null}
                        </div>
                        <div>
                            {formErrors.auth ? (
                                <div className="login-warning">{formErrors.auth}</div>
                            ) : null}
                        </div>
                        <button type="submit" className="btn btn-get-registered btn-block">
                            Iniciar sesión
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
    };