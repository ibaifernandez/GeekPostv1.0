import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
          store.errorLogin = "Llene todos los campos"
        } else {
          const isAuth = await actions.fetchCredentials( {email, password} );
          isAuth ? navigate("/home") : null;
        }
      };
  

    return (
        <div className="login-bg">
            <div className="container row login-box">
                <div className="login-left-wrapper">
                    <h1>¿Qué quieres crear hoy?</h1>
                    <h2 className="login-h2">¡Empecemos!</h2>
                    <Link to="/" className="login-link">
                    <h4 className="login-link FlechaVolver"><i class="fa-solid fa-arrow-rotate-left"></i>{" "}Volver al inicio</h4>
                    </Link>
                      

                </div>
                <div className="col login-right-wrapper login-form">
                    <div className="avatar"></div>
                    <div className="registration">
                        ¿Necesitas una cuenta?
                        <Link to="/login" className="login-link">
                            {" "}
                            Regístrate
                        </Link>
                    </div>
                    <form>
                        <label
                            htmlFor="usermail"
                            className="usermail label-block"
                        >
                            <input
                                id="usermail"
                                type="email"
                                className=" login-input"
                                placeholder="Correo electrónico"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                            />
                        </label>
                        <label
                            htmlFor="password"
                            className="password label-block"
                        >
                            <input
                                id="password"
                                type="password"
                                placeholder="Tu contraseña"
                                className="login-input"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />
                            <p className="required"></p>
                        </label>
                        <button
                            className="login-button"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Entrar
                        </button>
                    </form>
                    {store.errorLogin
                    ? <div className="text-danger"><p>{store.errorLogin}</p></div> 
                    : null
                    }
                </div>
            </div>
        </div>
    );
};
