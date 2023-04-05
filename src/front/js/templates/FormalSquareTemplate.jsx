import React, { useContext } from "react";


import "../../styles/templates/formal-square-template.css";
import { Context } from "../store/appContext";



export const FormalSquareTemplate = () => {
 
      const { store, actions } = useContext(Context);
      return (
      <>
      <div className="container-fluid CuadroQueContiene">
        <div className="CuadradoExterior">
          <img className="logoPFF" src={store.infoPost.logo} alt=""/>
          <div className="border-bottom divTextoPrincipal">
            <h3  className="TextoPrincipal text-decoration-underline">{store.infoPost.main_text}</h3>
          </div>
          <h5 className="TextoSecundario">{store.infoPost.secondary_text}</h5>
          <div className="rounded-circle circulo overflow-hidden" style={{backgroundColor:"{store.infoPost.main_color}"}}></div>
          <div className="CuadradoBorde border border-5" style={{backgroundColor:"{store.infoPost.aux_color}"}}></div>
          <div className="CuadradoColor2" style={{backgroundColor:"{store.infoPost.secondary_color}"}}></div>
          <img src="https://cnnespanol.cnn.com/wp-content/uploads/2023/02/230217101303-deportes-diana-flores-football-full-169.jpg?quality=100&strip=info&w=780&h=438&crop=1" alt="" className="ImagenCargada shadow-lg p-3 mb-5 bg-body-tertiary rounded"/>
          <div className="oferta p-2"><h4>{store.infoPost.price}</h4></div>
          <h3 className="TextoPrincipalb">{store.infoPost.identity}</h3>
          <div className="Cuadricula1" style={{backgroundColor:"{store.infoPost.secondary_color}"}}></div>
          <div className="Cuadricula2" style={{backgroundColor:"{store.infoPost.secondary_color}"}}></div>
        </div>
        <div className="recorte1"></div>
        <div className="recorte2"></div>
      </div>
    </>
    )
};
