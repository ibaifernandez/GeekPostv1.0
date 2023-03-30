import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/signup.css";
import fotoSignup from "../../../front/img/foto1.jpg";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [firstName, setFirstname] = useState("");

  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstName==="" || email === "" || password === "") {
      store.errorLogin = "Por favor, llene todos los campos."

    } else {
      const createUser = await actions.createUser({
        email,
        password,
        firstName,
      });
      if (createUser) {
        navigate("/home");
      }
    }
  };

  return (
    <div className="d-flex justify-content-around">
      <div>
        <h1 className=" d-flex flex-row mt-5 ms-3 p-3"> Sign Up</h1>
        <form className="d-flex flex-column m- ms-3">
          <div className=" col-12 d-flex flex-row m-3 ms-3 ">
            <label
              className="opacity-50 icono"
              htmlFor="inlineFormInputGroupName"
            >
              <i className="fa-solid fa-user"></i>
            </label>
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                className="border border-0 border-bottom w-100"
                id="inlineFormInputGroupName"
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Ingrese su nombre"
                required
              />
            </div>
          </div>
          <div className="   d-flex flex-row m-3 ms-3">
            <label
              className="opacity-50 icono"
              htmlFor="inlineFormInputGroupEmail"
            >
              <i className="fa-regular fa-envelope"></i>
            </label>
            <div className="input-group">
              <input
                type="email"
                className="border border-0 border-bottom w-100"
                id="inlineFormInputGroupEmail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Ingrese su correo"
                required
              />
            </div>
          </div>
          <div className="  d-flex flex-row m-3 ms-3">
            <label
              className="opacity-50 icono"
              htmlFor="inlineFormInputGroupPassword"
            >
              <i className="fa-solid fa-lock"></i>
            </label>
            <div className="input-group">
              <input
                type="password"
                className="border border-0 border-bottom w-100"
                id="inlineFormInputGroupPassword"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Ingrese un password"
                required
              />
            </div>
          </div>
          <div className="  d-flex flex-row m-3 ms-3">
            <label
              className="opacity-50 icono"
              htmlFor="inlineFormInputGroupPassword2"
            >
              <i className="fa-solid fa-lock "></i>
            </label>
            <div className="input-group">
              <input
                type="password"
                className="border border-0 border-bottom w-100 "
                id="inlineFormInputGroupPassword2"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="  Confirme su password"
                required
              />
            </div>
          </div>
          <div className="  d-flex flex-row m-3 ms-3">
            <div className="form-check">
              <label className="form-check-label" htmlFor="inlineFormCheck">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineFormCheck"
                />
                Estas de acuerdo con los{" "}
                <a href="#" className="text-reset">
                  Terminos y Condiciones
                </a>
              </label>
            </div>
          </div>
          {store.errorLogin
          ? <div className="text-danger"><p>{store.errorLogin}</p></div> 
          : null
          }
          <div className="col-12 m-3 ms-3">
            <button
              type="button"
              className="btn btn-primary opacity-50 m-3"
              onClick={handleSubmit}
            >
              Registrarme
            </button>
            <Link to="/login">
              <a href="#" className=" text-secondary text-decoration-underline">
                Ya estoy registrado
              </a>
            </Link>
          </div>
        </form>
      </div>
      <div>
        <img className="col-8  mt-5 me-5 w-100 rounded" src={fotoSignup} alt="" />
      </div>
    </div>
  );
};
