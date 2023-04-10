import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";

export const Login = () => {
    const { store, actions } = useContext(Context);
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

        if (email.trim() === "") {
        setFormErrors({ ...formErrors, email: "Campo requerido" });
        }

        if (password.trim() === "") {
        setFormErrors({ ...formErrors, password: "Campo requerido" });
        }

        if (email.trim() !== "" && password.trim() !== "") {
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
                <div className="login-left-wrapper">
                    <h1>¿Qué quieres crear hoy?</h1>
                    <h2 className="login-h2">¡Empecemos!</h2>
                </div>
                <div className="col login-right-wrapper login-form">
                    <div className="avatar"></div>
                    <div className="registration">
                        ¿Necesitas una cuenta?
                        <Link to="/login" className="login-link">
                            Regístrate
                        </Link>
                    </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="label-block">
                <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control login-input"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                {formErrors.email && (
                    <div className="alert alert-danger">{formErrors.email}</div>
                )}
                </label>
                <label htmlFor="password" className="label-block">
                <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control login-input"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                {formErrors.password && (
                    <div className="alert alert-danger">{formErrors.password}</div>
                )}
                </label>
                {formErrors.auth && (
                <div className="alert alert-danger">{formErrors.auth}</div>
                )}
                <button type="submit" className="btn btn-primary btn-block">
                Iniciar sesión
                </button>
            </form>
            </div>
        </div>
        </div>
    );
    };