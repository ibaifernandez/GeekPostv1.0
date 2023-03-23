import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import { Navigate, Link, useNavigate } from "react-router-dom";
//import "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css";
//import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
//import "https://fonts.googleapis.com/css?family=Didact+Gothic|Lobster&amp;subset=latin-ext"


export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (email === "" || password === "") {
        console.log("Complete la Formacion solicitada");
      } else {
        const ver = await actions.fetchCredentials(email, password);
        ver ? Navigate("/principal") : null;
        //	if (store.login === true)
        //	   {<Link to="/demo"/> }
        console.log(ver);
      }
    };

 
  
    return (
        <div className="container row login-box">
        <div className=" col login-title">
        <h1>Que quieres crear hoy?</h1>
        <span className="small-text">Empecemos!</span>
        </div>
        <div className=" col login-form p-3">
        <div className="avatar p-3">
        </div>
        <div className="registration">
        Necesitas una cuenta? 
        <Link to="/signup"><a href="#">Registrate</a></Link>
        </div>
        <form action="" method="POST">
        <label for="login" className="login">
        <input id="login" type="email" 
        className="ps-4 m-1"
        placeholder="Usuario" 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />
        </label>
        <label for="passwd" className="passwd ps-4 m-1">
        <input id="passwd" type="password" placeholder="Password" 
         onChange={(e) => setPassword(e.target.value)}
         value={password}
        />
        </label>
        <button className="button" type="submit" onClick={handleSubmit} >Entrar</button>
        </form>
        <div className="lost-passwd">
        <a href="#">Olvidaste tu password?</a>
        </div>
        </div>
        </div>
       
       
    );
  };
  